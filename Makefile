

api:
	cd packages/api; yarn build
	docker buildx build --platform "linux/amd64,linux/arm64,linux/s390x,linux/ppc64le" --push -t esara/cloudcarbonfootprint-api packages/api

mock:
	docker buildx build --platform "linux/amd64,linux/arm64,linux/s390x,linux/ppc64le" --push -t esara/cloudcarbonfootprint-mock packages/client -f packages/client/Dockerfile-mock

client:
	cd packages/client; yarn build:app
	docker buildx build --platform "linux/amd64,linux/arm64,linux/s390x,linux/ppc64le" --push -t esara/cloudcarbonfootprint-client packages/client

all: api client
