IMAGE_NAME = jekyll-essenza
CONTAINER_NAME = jekyll-essenza
PORT = 4000

.PHONY: build serve stop clean

build:
	docker build -t $(IMAGE_NAME) .

serve: build
	docker run --rm -it \
		--name $(CONTAINER_NAME) \
		-p $(PORT):4000 \
		-v "$$(pwd)":/srv/jekyll \
		$(IMAGE_NAME)

stop:
	docker stop $(CONTAINER_NAME) 2>/dev/null || true

clean:
	docker rmi $(IMAGE_NAME) 2>/dev/null || true
	rm -rf _site .jekyll-cache
