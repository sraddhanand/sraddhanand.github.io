---
id: mongod_config
title: Mongod configurations
---

```bash
mongo --auth --bing_ip_all or --bind_ip
```

## Process log:

Mongo stores the events related to activities on mongod process.

- To get the information about verbosity levels
  ```bash
  db.getLogComponents()
  ```
- To change the verbosity level to 0, which display only INFO(example for indexes).
  ```bash
  db.setLogLevel(0, "index")
  ```
- To enable debug log, set the value to 1-5.
- Log file path: <code> dbPath/mongod.log </code>

## DB Profiling:

Profiler captures the following information:

- CRUD operations
- Administrative operations
- Configuration operations

```bash
db.getProfilingLevel()
db.setProfilingLevel(1)
db.system.profile.find().pretty()
```

## Authentication

Mongo supports following mechanisms

- SCRAM
- x.509
- LDAP (enterprise only)
- KERBEROS (enterprise only)

## Autherization

- Role based autherization control
- Roles and users are limited to database.

### How it works?

- Each <code>user</code> has one or more <code>roles</code>
- Each <code>Role</code> has one or mote <code>Privilaged</code>
- A privilage is group of <code>actions</code> and the <code>Resources</code> those actions applied to.

```bash
use admin
db.createUser({
  user: "root",
  pwd: "root123",
  roles : [ "root" ]
})
```

### Built-in Roles:

Pre-packaged mongodb roles.

- Database user
- database administrator
- Cluster administrator
- Backup/restore
- super user

:::tip
It is recommanded to create users in <code>admin</code> database and specify the <code>database</code> on which user get access rather than creating user in individual db
:::

**userAdmin** : Can create and manage roles but can not do anything with data.
**dbAdmin** : Gets the ability to do anything with data but can do nothing on user adminstration
**dbOwner** : dbOwner = dbAdmin + userAdmin + readWrite

```bash
use admin; # to switch to admin database
db.createUser(
  { user: "dba",
    pwd: "c1lynd3rs",
    roles: [ { db: "myAppDb", role: "dbAdmin" } ]
  }
)
```

To add dbOwner role the above user

```bash
db.grantRolesToUser( "dba",  [ { db: "myAppDb", role: "dbOwner"  } ] )
```

## Utilities

- mongostat
- mongodump
  - collection.bson is the actual data
  - collection.json is the metadata of the data
- mongorestore
- mongoexport
  - useful to store collection data into a json file
- mongoimport
  - import the exported data
