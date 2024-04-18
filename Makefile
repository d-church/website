all: install build start
install:
	npm ci
build:
	npm run build
lint:
	npm run lint
start:
	npm run start
dev:
	npm run dev
prettier:
	npm run prettier
add:
	npx shadcn-ui@latest add ${comp}

.PHONY: all install build lint start dev