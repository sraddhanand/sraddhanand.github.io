---
id: replicaset
title: MongoDB Replica set
---

- **Primary node**: where write happened
- **Secondory nodes**: Syncs data from Primary node.
- **Election**: When primary node goes down, voting happens and one of the secondory becomes primary. But once the earlier primary node is back healthy, it will join the replicaset and sync from new primare and acts as secondory.

## Binary replication

- Less data
- Faster
- Tight dependancy on underlying OS and the mongod version

## Statement-based replication

- Bigger data
- Not bound to OS, so useful for cross platform solutions.
  :::note
  MongoDB uses statement-based replication, not binary replication.
  MongoDB uses a small variation of statement-based replication which reduces statements to idempotent versions so they can be repeated.
  :::

## Replication in MondoDB

- Write happens to primary
- Protocol version 1 (PV1)
- oplog is statement-based log
- **Arbitor** node can be useful for Primary election and it does not hold any data. But better not to use them.
  :::important
  Any topoogy change will trigger an election
  :::

## Steps to create replica

- Create key file for the mongo nodes to talk to each other

```bash
openssl rand -base64 741 > /var/mongodb/pki/m103-keyfile
chmod 600 /var/mongodb/pki/m103-keyfile
```

- Add the key file info in the mongod.conf

```yaml
security:
  authorization: enabled
  keyFile: /var/mongodb/pki/m103-keyfile
```

- Create user

```bash
use admin
db.createUser({
  user: "m103-admin",
  pwd: "m103-pass",
  roles: [
    {role: "root", db: "admin"}
  ]
})
```

```bash
rs.initiate()
rs.status()
rs.add("m103:27017")
rs.add("m103:27017")
rs.isMaster()
```

When connecting to a replica set, the mongo shell will redirect the connection to the primary node.

## Member properties

- **arbitorOnly**: true or false; when selected true, member contribute only for master election; _default_ = false
- **hidden**: true or false; not visible to the application, not listed in <code>rs.isMaster()</code> response; _default_ = false
- **priority**: 1-1000, higher the number - higher the chance to be elected as master, set to zero if member should not be primery ever.
- **slaveDelay**: replication delay in seconds. _default_ = 0
  :::info
  If non-zero integer is set as <code>slaveDelay</code>, update <code>hidden: true </code> and <code>priority: 0 </code>. The intention of providing this options is to provide the feasibility of restoring the data from past in case unexpected events happens on data.
  :::

## Replication commands

- **rs.status()** :
  - Reports health, state, uptime on replica set nodes
  - Uses data from heartbeats
- **rs.isMaster()** :
  - briefs <code>rs.status()</code>.
  - Display list of node and wich is master node
- **db.serverStatus()['repl']**:
  - along with isMaster() status, it is display roleback information.
- **rs.printReplicationInfo()**:
  - Displays oplog info such as size, first event time, last event time.
