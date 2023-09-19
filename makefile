make infra: 
	docker-compose up -d

#every time you change schema.prisma
make prisma: 
	pnpm prisma migrate dev 