#!/usr/bin/env python
# -*- coding: utf-8 -*- #
"""Pelican setings."""

from __future__ import unicode_literals

AUTHOR = 'James K. Glasbrenner'
SITENAME = "Schelling's Model of Segretation"
SITEURL = ''

PATH = 'content'

TIMEZONE = 'America/New_York'

DEFAULT_LANG = 'en'

CC_LICENSE = "CC-BY-SA"

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = ''

# Social widget
SOCIAL = ''

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True

# Define paths and urls
STATIC_PATHS = ['figures', 'documents']
PAGE_PATHS = []
PAGE_URL = ''
PAGE_SAVE_AS = ''
ARTICLE_URL = '{slug}.html'
ARTICLE_SAVE_AS = '{slug}.html'
AUTHOR_URL = ''
AUTHOR_SAVE_AS = ''
DRAFT_URL = ''
DRAFT_SAVE_AS = ''
CATEGORY_URL = ''
CATEGORY_SAVE_AS = ''
TAG_URL = ''
TAG_SAVE_AS = ''
ARCHIVES_SAVE_AS = ''
CATEGORIES_SAVE_AS = ''
TAGS_SAVE_AS = ''
AUTHORS_SAVE_AS = ''
INDEX_SAVE_AS = ''
DIRECT_TEMPLATES = []
PAGINATED_DIRECT_TEMPLATES = []
SUMMARY_MAX_LENGTH = 50
CACHE_CONTENT = False

# Typogrify
TYPOGRIFY = True

# Menu items
DISPLAY_PAGES_ON_MENU = False
DISPLAY_CATEGORIES_ON_MENU = False
GITHUB_CLASS_URL = ""
MENUITEMS = []

# Plugins
PLUGIN_PATHS = ["plugins"]
PLUGINS = ["custom_article_urls", "pandoc_reader", "rmd_reader"]

# Custom Article URLs
CUSTOM_ARTICLE_URLS = {}

# RMD Reader
RMD_READER_CLEANUP = True
RMD_READER_RENAME_PLOT = 'directory'
RMD_READER_KNITR_QUIET = True
RMD_READER_KNITR_ENCODING = 'UTF-8'
RMD_READER_KNITR_OPTS_CHUNK = {'fig.path': 'figures/'}
RMD_READER_KNITR_OPTS_KNIT = None

# Pandoc Reader
PANDOC_ARGS = [
    '--smart', '--no-highlight', '--filter', 'pandoc-citeproc',
    '--csl=theme/format/apslike.csl',  '--metadata', 'link-citations=true',
    '--bibliography', 'content/documents/references.bib', '--mathjax',
    '--variable', '"mathjax-url:#"'
]
PANDOC_EXTENSIONS = [
    '+autolink_bare_uris', '+ascii_identifiers', '-tex_math_single_backslash',
    '-implicit_figures', '+multiline_tables', '+tex_math_double_backslash'
]

# THEME
THEME = "theme"
THEME_STATIC_PATHS = ['static']

# READERS
READERS = {'html': None, 'yaml': None}

HIGHLIGHT_JS_STYLE = "default"
