NPM ?= $(shell which npm)
PKG_MANAGER = NPM

clean-modules:
	@echo "🚀 [clean-modules] Removing node_modules."
	@echo "@rm -rf node_modules"
	@rm -rf node_modules
	@echo "🏁 Finished [clean-modules]."

setup:
	@echo "🚀 [setup-modules] Installing package modules."
	$(PKG_MANAGER) install
	@echo "🏁 Finished [setup-modules]."

start:
	@echo "🚀 [start] Starting project by public path."
	$(PKG_MANAGER) start
	@echo "🏁 Finished [start]."

lint:
	@echo "🚀 [lint] Checking codes using linter."
	$(PKG_MANAGER) run lint
	@echo "🏁 Finished [lint]."

lint-fix:
	@echo "🚀 [lint-fix] Fixing codes using linter."
	$(PKG_MANAGER) run lint:fix
	@echo "🏁 Finished [lint-fix]."

test:
	@echo "🚀 [test] Testing codes."
	$(PKG_MANAGER) test $(FILE_TEST)
	@echo "🏁 Finished [test]."

test-coverage:
	@echo "🚀 [test-coverage] Testing codes and analizying coverage."
	$(PKG_MANAGER) run test:coverage
	@echo "🏁 Finished [test-coverage]."

test-update-snapshot:
	@echo "🚀 [test-update-snapshot] Updating snapshots and testing codes."
	$(PKG_MANAGER) run test:updateSnapshot
	@echo "🏁 Finished [test-update-snapshot]."

test-watch:
	@echo "🚀 [test-watch] Watching changes on test codes."
	$(PKG_MANAGER) run test:watch
	@echo "🏁 Finished [test-watch]."

watch:
	@echo "🚀 [watch] Watching changes on codes."
	$(PKG_MANAGER) run watch
	@echo "🏁 Finished [watch]."

# CI / CD (gitlab)
lint: lint

test: test
