# Migration `20201123133805-song`

This migration has been generated by axelobscura at 11/23/2020, 1:38:05 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

ALTER TABLE "quaint"."Song" ADD COLUMN "albumCoverUrl" TEXT   ,
ADD COLUMN "youtubeId" TEXT   ;

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201123133805-song
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,23 @@
+datasource db {
+  provider = "sqlite"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Song {
+  id       Int     @default(autoincrement()) @id
+  name     String
+  youtubeId     String?
+  albumCoverUrl String?
+  artist   Artist? @relation(fields: [artistId], references: [id])
+  artistId Int?
+}
+
+model Artist {
+  id    Int    @default(autoincrement()) @id
+  name  String @unique
+  songs Song[]
+}
```

