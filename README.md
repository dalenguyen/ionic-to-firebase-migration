Migration users from Ionic to Firebase

# Requirements

You need NODE or something that can run JAVASCRIPT (JS) file.

# Get a list of emails only

Input file is ionic-users-sample.json
Output file is emails-list.txt

```
node get-emails-only.js
```

# Prepare user data for importing to Firebase

```
node users-preparation.js
```

The output is firebase-ready.json

# Importing user to Firebase

You need to install [firebase-tools](https://www.npmjs.com/package/firebase-tools/tutorial) in order to import or export database

```
firebase auth:import firebase-ready.json --project="your-firebase-project" --hash-algo=<ionic-hash-algo> --rounds=<ionic-rounds>
```
