FORMAT_FILES = _posts/*.md \
               .agent/skills/*.md \
               ANALYTICAL_SPARC_AGENTS.md
BUNDLE_FILES = _config.yml \
               assets/img/logo.png \
               _posts \
               _news \
               _pages \
               _layouts/about_custom.liquid \
               _sass/_custom.scss \
               assets/css/main.scss \
               _includes/datatables.liquid \
               _includes/head.liquid \
               _includes/scripts.liquid \
               Makefile \
               NOTES.md \
               AGENTS.md \
               ANALYTICAL_SPARC_AGENTS.md

.DEFAULT_GOAL := help

.PHONY: help up fix bundle

help: ## Show this help message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

up: ## Start the local development server via Docker
	docker compose up

fix: ## Format Markdown files using Prettier
	npx prettier $(FORMAT_FILES) --write

bundle: ## Create a compressed archive of custom site files
	tar -czf analytical-sparc-custom.tgz $(BUNDLE_FILES)
