
### Reproduce steps

1. run `yarn install`
2. create a `.end.development` in `packages/new-site` use the config example below
3. run `yarn workspace new-site start`


the site depends on a running drupal site

#### config example
```env

# drupal
DRUPAL_HOST=http://jmolivas-drupal.weknowinc.develop

# gatsby
PROJECT_URL=http://jmolivas.weknowinc.develop

# manifest
SITE_NAME=Jesus Manuel Olivas
SHORT_NAME=jmolivas

# analytics
TRACKING_ID=UA-21456041-1

# Drupal Planet Feed
DRUPAL_RSS_FEED_FILE=drupalplanet.xml
DRUPAL_RSS_FEED_TAG=59
```


> If you use a small component it works but if the component uses a staticQuery
it won't load.