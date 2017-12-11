SHELL					=	/bin/sh

RM					=	rm
ECHO					=	echo
COPY					=	cp

PY					?=	python3
PELICAN					?=	pelican
PELICANOPTS				=

BASEDIR					=	$(CURDIR)
INPUTDIR				=	$(BASEDIR)/content
OUTPUTDIR				=	$(BASEDIR)/output
CONFFILE				=	$(BASEDIR)/pelicanconf.py
PUBLISHCONF				=	$(BASEDIR)/publishconf.py
PORT					=	8000

FTP_HOST				=	localhost
FTP_USER				=	anonymous
FTP_TARGET_DIR				=	/

SSH_HOST				=	localhost
SSH_PORT				=	22
SSH_USER				=	root
SSH_TARGET_DIR				=	/var/www

S3_BUCKET				=	my_s3_bucket

CLOUDFILES_USERNAME			=	my_rackspace_username
CLOUDFILES_API_KEY			=	my_rackspace_api_key
CLOUDFILES_CONTAINER			=	my_cloudfiles_container

DROPBOX_DIR				=	~/Dropbox/Public/

GITHUB_PAGES_BRANCH			=	gh-pages

DEBUG 					?= 	0
ifeq ($(DEBUG), 1)
	PELICANOPTS	+=	-D
endif

RELATIVE 				?=	0
ifeq ($(RELATIVE), 1)
	PELICANOPTS	+=	--relative-urls
endif

.SILENT :

