SHELL					=	/bin/sh

RM						=	rm
ECHO					=	echo
COPY					=	cp

NODEJS					=	node
BUNDLE					=	browserify
SERVE					=	light-server
SERVE_PORT				=	8000

DIST_DIR				=	dist
DIST_JS					=	schelling-model.js
INDEX_JS				=	index.js

ALL_FILES				=	$(addprefix $(DIST_DIR)/,$(DIST_JS))

define make_all
	$(ECHO) All builds in $(CURDIR) complete!
endef

define bundlejs
	$(ECHO) Bundling javascript using $(BUNDLE)...
	$(BUNDLE) $< -o $@
	$(ECHO) Bundling to file $(DIST_JS) complete!
endef

define servejs
	$(ECHO) Serving $(CURDIR) on port $(SERVE_PORT)
	$(SERVE) -s $(CURDIR) -p $(SERVE_PORT)
endef

define cleanup
	$(ECHO) Cleaning files in $(CURDIR)
	-$(RM) -rf $(DIST_DIR)
endef

.SILENT :
.PHONY : all clean serve $(DIST_DIR)/$(DIST_JS)

all : $(ALL_FILES)
	$(call make_all)

clean :
	$(call cleanup)

serve :
	$(call servejs)

$(DIST_DIR)/$(DIST_JS) : $(INDEX_JS)
	$(call bundlejs)

$(ALL_FILES) : | $(DIST_DIR)

$(DIST_DIR) :
	mkdir -p $(DIST_DIR)
