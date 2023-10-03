make start: 
	docker-compose up -d
	npm start

#every time you change schema.prisma
make prisma: 
	npm prisma migrate dev 