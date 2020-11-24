# Migration `20201123200443-categos`

This migration has been generated by axelobscura at 11/23/2020, 8:04:43 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "quaint"."Categorias" (
"id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,"name" TEXT NOT NULL  )

CREATE UNIQUE INDEX "quaint"."Categorias.name" ON "Categorias"("name")

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201123152539-tester..20201123200443-categos
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource db {
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -19,5 +19,10 @@
 model Artist {
   id    Int    @default(autoincrement()) @id
   name  String @unique
   songs Song[]
+}
+
+model Categorias {
+  id    Int    @default(autoincrement()) @id
+  name  String @unique
 }
```

