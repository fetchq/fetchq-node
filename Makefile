db: cleanup
	docker run -itd \
		--name fetchq_test \
		-p 5432:5432 \
		-e POSTGRES_PASSWORD=postgres \
		postgres

cleanup:
	docker rm -f fetchq_test || true

test-run:
	npm i
	npm test

test: db test-run cleanup
