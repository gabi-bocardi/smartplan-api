make start: 
	docker-compose up -d
	npm run start:dev

#every time you change schema.prisma
make prisma: 
	npm prisma migrate dev