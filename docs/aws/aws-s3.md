---
id: aws-s3
title: S3 Hacks
---

- Get the objects bigger than 15728640 bytes. Provide S3 folder path as key. 
```python
import boto3

def s3_files_beyond_threshold_v2(s3_client,lv_bucket,lv_key):
    bigger_files = 0
    paginator = s3_client.get_paginator("list_objects_v2")
    paginator_result = paginator.paginate(Bucket=lv_bucket, Prefix=lv_key)
    try:
        for vd_obj in paginator_result.search("Contents[?Size > `15728640`][]"):
            bigger_files += 1         
            print(vd_obj['Key'])                               
    except Exception as err:
        print(err)
    return bigger_files

```

- Get storage information of the bucket or directory in a bucket. Pagination is already handled as part of the command and if you have large number of files, it might take more time to get the output.
```bash
aws s3api list-objects --profile prod --bucket my_bucket_name --prefix directory_name/ --output json --query "[sum(Contents[].Size), length(Contents[])]" | awk 'NR!=2 {print $0;next} NR==2 {print $0/1024/1024/1024" GB"}'
```
