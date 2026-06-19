/**
 * 웹 서버 전용 DB 클라이언트.
 * vision-manager-app 과 동일한 Supabase Postgres 에 DATABASE_URL 로 직결한다.
 * (Supabase 트랜잭션 풀러 6543 → prepared statement 미지원이므로 prepare:false)
 *
 * 주의: 서버 컴포넌트/route handler 에서만 import 할 것. (Edge 미들웨어에서는 사용 불가)
 */
import "server-only";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

let _db: ReturnType<typeof drizzle<typeof schema>> | null = null;

export function getDb() {
  if (!_db) {
    const url = process.env.DATABASE_URL;
    if (!url) {
      throw new Error("DATABASE_URL is not configured");
    }
    const client = postgres(url, { prepare: false });
    _db = drizzle(client, { schema });
  }
  return _db;
}

export { schema };
