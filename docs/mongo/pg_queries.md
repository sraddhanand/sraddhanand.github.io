---
id: postgres_queries
title: Postgres DB Stats
---


- Get queries running more than 5 minutes
```sql
SELECT pid, age(query_start, clock_timestamp()), usename,query
FROM pg_stat_activity
WHERE state  not ilike 'idle' AND query NOT ILIKE '%pg_stat_activity%'
AND state_change < current_timestamp - INTERVAL '5' MINUTE
ORDER BY query_start desc;
```

- Idle Sessions
```sql
SELECT distinct query,client_addr
FROM pg_stat_activity
WHERE state   ilike 'idle' AND query NOT ILIKE '%pg_stat_activity%'
AND state_change < current_timestamp - INTERVAL '30' MINUTE
ORDER BY  client_addr;
```

- Display Active Connections
```sql
SELECT pid, age(query_start, clock_timestamp()), usename,query
FROM pg_stat_activity
WHERE state       not ilike  'idle' AND query NOT ILIKE '%pg_stat_activity%'
ORDER BY query_start desc;
```

- Count of live connections
```sql
SELECT count(1)
FROM pg_stat_activity
WHERE query NOT ILIKE '%pg_stat_activity%';
```

- Top tables by size
```sql
SELECT schemaname,
relname as "Table", last_vacuum, last_autovacuum, vacuum_count, autovacuum_count,
pg_size_pretty(pg_total_relation_size(relid)) As "Size"
FROM pg_catalog.pg_stat_user_tables
ORDER BY pg_total_relation_size(relid) DESC limit 20;
```