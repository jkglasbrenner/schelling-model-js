include Makefile.inc

.PHONY : all clean serve $(DIST_DIR)/$(DIST_JS)

all : $(ALL_FILES)
	$(call makejs)

clean :
	$(call cleanup)

serve :
	$(call servejs)

$(DIST_DIR)/$(DIST_JS) : $(INDEX_JS)
	$(call bundlejs)

$(ALL_FILES) : | $(DIST_DIR)

$(DIST_DIR) :
	mkdir -p $(DIST_DIR)
