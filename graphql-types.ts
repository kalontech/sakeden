export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type ContentfulAsset = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  contentful_id?: Maybe<Scalars['String']>;
  file?: Maybe<ContentfulAssetFile>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  node_locale?: Maybe<Scalars['String']>;
  localFile?: Maybe<File>;
  fixed?: Maybe<ContentfulFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ContentfulResolutions>;
  fluid?: Maybe<ContentfulFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ContentfulSizes>;
  resize?: Maybe<ContentfulResize>;
};


export type ContentfulAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  toFormat?: Maybe<ContentfulImageFormat>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};

export type ContentfulAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAssetGroupConnection>;
};


export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetEdge = {
  next?: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous?: Maybe<ContentfulAsset>;
};

export type ContentfulAssetFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'contentful_id' |
  'file___url' |
  'file___details___size' |
  'file___details___image___width' |
  'file___details___image___height' |
  'file___fileName' |
  'file___contentType' |
  'title' |
  'description' |
  'node_locale' |
  'localFile___sourceInstanceName' |
  'localFile___absolutePath' |
  'localFile___relativePath' |
  'localFile___extension' |
  'localFile___size' |
  'localFile___prettySize' |
  'localFile___modifiedTime' |
  'localFile___accessTime' |
  'localFile___changeTime' |
  'localFile___birthTime' |
  'localFile___root' |
  'localFile___dir' |
  'localFile___base' |
  'localFile___ext' |
  'localFile___name' |
  'localFile___relativeDirectory' |
  'localFile___dev' |
  'localFile___mode' |
  'localFile___nlink' |
  'localFile___uid' |
  'localFile___gid' |
  'localFile___rdev' |
  'localFile___ino' |
  'localFile___atimeMs' |
  'localFile___mtimeMs' |
  'localFile___ctimeMs' |
  'localFile___atime' |
  'localFile___mtime' |
  'localFile___ctime' |
  'localFile___birthtime' |
  'localFile___birthtimeMs' |
  'localFile___blksize' |
  'localFile___blocks' |
  'localFile___url' |
  'localFile___publicURL' |
  'localFile___childImageSharp___fixed___base64' |
  'localFile___childImageSharp___fixed___tracedSVG' |
  'localFile___childImageSharp___fixed___aspectRatio' |
  'localFile___childImageSharp___fixed___width' |
  'localFile___childImageSharp___fixed___height' |
  'localFile___childImageSharp___fixed___src' |
  'localFile___childImageSharp___fixed___srcSet' |
  'localFile___childImageSharp___fixed___srcWebp' |
  'localFile___childImageSharp___fixed___srcSetWebp' |
  'localFile___childImageSharp___fixed___originalName' |
  'localFile___childImageSharp___resolutions___base64' |
  'localFile___childImageSharp___resolutions___tracedSVG' |
  'localFile___childImageSharp___resolutions___aspectRatio' |
  'localFile___childImageSharp___resolutions___width' |
  'localFile___childImageSharp___resolutions___height' |
  'localFile___childImageSharp___resolutions___src' |
  'localFile___childImageSharp___resolutions___srcSet' |
  'localFile___childImageSharp___resolutions___srcWebp' |
  'localFile___childImageSharp___resolutions___srcSetWebp' |
  'localFile___childImageSharp___resolutions___originalName' |
  'localFile___childImageSharp___fluid___base64' |
  'localFile___childImageSharp___fluid___tracedSVG' |
  'localFile___childImageSharp___fluid___aspectRatio' |
  'localFile___childImageSharp___fluid___src' |
  'localFile___childImageSharp___fluid___srcSet' |
  'localFile___childImageSharp___fluid___srcWebp' |
  'localFile___childImageSharp___fluid___srcSetWebp' |
  'localFile___childImageSharp___fluid___sizes' |
  'localFile___childImageSharp___fluid___originalImg' |
  'localFile___childImageSharp___fluid___originalName' |
  'localFile___childImageSharp___fluid___presentationWidth' |
  'localFile___childImageSharp___fluid___presentationHeight' |
  'localFile___childImageSharp___sizes___base64' |
  'localFile___childImageSharp___sizes___tracedSVG' |
  'localFile___childImageSharp___sizes___aspectRatio' |
  'localFile___childImageSharp___sizes___src' |
  'localFile___childImageSharp___sizes___srcSet' |
  'localFile___childImageSharp___sizes___srcWebp' |
  'localFile___childImageSharp___sizes___srcSetWebp' |
  'localFile___childImageSharp___sizes___sizes' |
  'localFile___childImageSharp___sizes___originalImg' |
  'localFile___childImageSharp___sizes___originalName' |
  'localFile___childImageSharp___sizes___presentationWidth' |
  'localFile___childImageSharp___sizes___presentationHeight' |
  'localFile___childImageSharp___original___width' |
  'localFile___childImageSharp___original___height' |
  'localFile___childImageSharp___original___src' |
  'localFile___childImageSharp___resize___src' |
  'localFile___childImageSharp___resize___tracedSVG' |
  'localFile___childImageSharp___resize___width' |
  'localFile___childImageSharp___resize___height' |
  'localFile___childImageSharp___resize___aspectRatio' |
  'localFile___childImageSharp___resize___originalName' |
  'localFile___childImageSharp___id' |
  'localFile___childImageSharp___parent___id' |
  'localFile___childImageSharp___parent___children' |
  'localFile___childImageSharp___children' |
  'localFile___childImageSharp___children___id' |
  'localFile___childImageSharp___children___children' |
  'localFile___childImageSharp___internal___content' |
  'localFile___childImageSharp___internal___contentDigest' |
  'localFile___childImageSharp___internal___description' |
  'localFile___childImageSharp___internal___fieldOwners' |
  'localFile___childImageSharp___internal___ignoreType' |
  'localFile___childImageSharp___internal___mediaType' |
  'localFile___childImageSharp___internal___owner' |
  'localFile___childImageSharp___internal___type' |
  'localFile___id' |
  'localFile___parent___id' |
  'localFile___parent___parent___id' |
  'localFile___parent___parent___children' |
  'localFile___parent___children' |
  'localFile___parent___children___id' |
  'localFile___parent___children___children' |
  'localFile___parent___internal___content' |
  'localFile___parent___internal___contentDigest' |
  'localFile___parent___internal___description' |
  'localFile___parent___internal___fieldOwners' |
  'localFile___parent___internal___ignoreType' |
  'localFile___parent___internal___mediaType' |
  'localFile___parent___internal___owner' |
  'localFile___parent___internal___type' |
  'localFile___children' |
  'localFile___children___id' |
  'localFile___children___parent___id' |
  'localFile___children___parent___children' |
  'localFile___children___children' |
  'localFile___children___children___id' |
  'localFile___children___children___children' |
  'localFile___children___internal___content' |
  'localFile___children___internal___contentDigest' |
  'localFile___children___internal___description' |
  'localFile___children___internal___fieldOwners' |
  'localFile___children___internal___ignoreType' |
  'localFile___children___internal___mediaType' |
  'localFile___children___internal___owner' |
  'localFile___children___internal___type' |
  'localFile___internal___content' |
  'localFile___internal___contentDigest' |
  'localFile___internal___description' |
  'localFile___internal___fieldOwners' |
  'localFile___internal___ignoreType' |
  'localFile___internal___mediaType' |
  'localFile___internal___owner' |
  'localFile___internal___type' |
  'fixed___base64' |
  'fixed___tracedSVG' |
  'fixed___aspectRatio' |
  'fixed___width' |
  'fixed___height' |
  'fixed___src' |
  'fixed___srcSet' |
  'fixed___srcWebp' |
  'fixed___srcSetWebp' |
  'resolutions___base64' |
  'resolutions___tracedSVG' |
  'resolutions___aspectRatio' |
  'resolutions___width' |
  'resolutions___height' |
  'resolutions___src' |
  'resolutions___srcSet' |
  'resolutions___srcWebp' |
  'resolutions___srcSetWebp' |
  'fluid___base64' |
  'fluid___tracedSVG' |
  'fluid___aspectRatio' |
  'fluid___src' |
  'fluid___srcSet' |
  'fluid___srcWebp' |
  'fluid___srcSetWebp' |
  'fluid___sizes' |
  'sizes___base64' |
  'sizes___tracedSVG' |
  'sizes___aspectRatio' |
  'sizes___src' |
  'sizes___srcSet' |
  'sizes___srcWebp' |
  'sizes___srcSetWebp' |
  'sizes___sizes' |
  'resize___base64' |
  'resize___tracedSVG' |
  'resize___src' |
  'resize___width' |
  'resize___height' |
  'resize___aspectRatio';

export type ContentfulAssetFile = {
  url?: Maybe<Scalars['String']>;
  details?: Maybe<ContentfulAssetFileDetails>;
  fileName?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
};

export type ContentfulAssetFileDetails = {
  size?: Maybe<Scalars['Int']>;
  image?: Maybe<ContentfulAssetFileDetailsImage>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

export type ContentfulAssetFileDetailsImage = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  details?: Maybe<ContentfulAssetFileDetailsFilterInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  localFile?: Maybe<FileFilterInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
};

export type ContentfulAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAssetSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlockFeaturedBlogPosts = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  blogPosts?: Maybe<Array<Maybe<ContentfulBlogPost>>>;
  page?: Maybe<Array<Maybe<ContentfulPage>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulBlockFeaturedBlogPostsSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulBlockFeaturedBlogPostsCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulBlockFeaturedBlogPostsUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulBlockFeaturedBlogPostsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockFeaturedBlogPostsEdge>;
  nodes: Array<ContentfulBlockFeaturedBlogPosts>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlockFeaturedBlogPostsGroupConnection>;
};


export type ContentfulBlockFeaturedBlogPostsConnectionDistinctArgs = {
  field: ContentfulBlockFeaturedBlogPostsFieldsEnum;
};


export type ContentfulBlockFeaturedBlogPostsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlockFeaturedBlogPostsFieldsEnum;
};

export type ContentfulBlockFeaturedBlogPostsContentfulBlockFeaturedProductsContentfulBlockFormContentfulBlockHeroUnion = ContentfulBlockFeaturedBlogPosts | ContentfulBlockFeaturedProducts | ContentfulBlockForm | ContentfulBlockHero;

export type ContentfulBlockFeaturedBlogPostsEdge = {
  next?: Maybe<ContentfulBlockFeaturedBlogPosts>;
  node: ContentfulBlockFeaturedBlogPosts;
  previous?: Maybe<ContentfulBlockFeaturedBlogPosts>;
};

export type ContentfulBlockFeaturedBlogPostsFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'title' |
  'blogPosts' |
  'blogPosts___id' |
  'blogPosts___parent___id' |
  'blogPosts___parent___parent___id' |
  'blogPosts___parent___parent___children' |
  'blogPosts___parent___children' |
  'blogPosts___parent___children___id' |
  'blogPosts___parent___children___children' |
  'blogPosts___parent___internal___content' |
  'blogPosts___parent___internal___contentDigest' |
  'blogPosts___parent___internal___description' |
  'blogPosts___parent___internal___fieldOwners' |
  'blogPosts___parent___internal___ignoreType' |
  'blogPosts___parent___internal___mediaType' |
  'blogPosts___parent___internal___owner' |
  'blogPosts___parent___internal___type' |
  'blogPosts___children' |
  'blogPosts___children___id' |
  'blogPosts___children___parent___id' |
  'blogPosts___children___parent___children' |
  'blogPosts___children___children' |
  'blogPosts___children___children___id' |
  'blogPosts___children___children___children' |
  'blogPosts___children___internal___content' |
  'blogPosts___children___internal___contentDigest' |
  'blogPosts___children___internal___description' |
  'blogPosts___children___internal___fieldOwners' |
  'blogPosts___children___internal___ignoreType' |
  'blogPosts___children___internal___mediaType' |
  'blogPosts___children___internal___owner' |
  'blogPosts___children___internal___type' |
  'blogPosts___internal___content' |
  'blogPosts___internal___contentDigest' |
  'blogPosts___internal___description' |
  'blogPosts___internal___fieldOwners' |
  'blogPosts___internal___ignoreType' |
  'blogPosts___internal___mediaType' |
  'blogPosts___internal___owner' |
  'blogPosts___internal___type' |
  'blogPosts___title' |
  'blogPosts___slug' |
  'blogPosts___publishDate' |
  'blogPosts___image___id' |
  'blogPosts___image___parent___id' |
  'blogPosts___image___parent___children' |
  'blogPosts___image___children' |
  'blogPosts___image___children___id' |
  'blogPosts___image___children___children' |
  'blogPosts___image___internal___content' |
  'blogPosts___image___internal___contentDigest' |
  'blogPosts___image___internal___description' |
  'blogPosts___image___internal___fieldOwners' |
  'blogPosts___image___internal___ignoreType' |
  'blogPosts___image___internal___mediaType' |
  'blogPosts___image___internal___owner' |
  'blogPosts___image___internal___type' |
  'blogPosts___image___contentful_id' |
  'blogPosts___image___file___url' |
  'blogPosts___image___file___fileName' |
  'blogPosts___image___file___contentType' |
  'blogPosts___image___title' |
  'blogPosts___image___description' |
  'blogPosts___image___node_locale' |
  'blogPosts___image___localFile___sourceInstanceName' |
  'blogPosts___image___localFile___absolutePath' |
  'blogPosts___image___localFile___relativePath' |
  'blogPosts___image___localFile___extension' |
  'blogPosts___image___localFile___size' |
  'blogPosts___image___localFile___prettySize' |
  'blogPosts___image___localFile___modifiedTime' |
  'blogPosts___image___localFile___accessTime' |
  'blogPosts___image___localFile___changeTime' |
  'blogPosts___image___localFile___birthTime' |
  'blogPosts___image___localFile___root' |
  'blogPosts___image___localFile___dir' |
  'blogPosts___image___localFile___base' |
  'blogPosts___image___localFile___ext' |
  'blogPosts___image___localFile___name' |
  'blogPosts___image___localFile___relativeDirectory' |
  'blogPosts___image___localFile___dev' |
  'blogPosts___image___localFile___mode' |
  'blogPosts___image___localFile___nlink' |
  'blogPosts___image___localFile___uid' |
  'blogPosts___image___localFile___gid' |
  'blogPosts___image___localFile___rdev' |
  'blogPosts___image___localFile___ino' |
  'blogPosts___image___localFile___atimeMs' |
  'blogPosts___image___localFile___mtimeMs' |
  'blogPosts___image___localFile___ctimeMs' |
  'blogPosts___image___localFile___atime' |
  'blogPosts___image___localFile___mtime' |
  'blogPosts___image___localFile___ctime' |
  'blogPosts___image___localFile___birthtime' |
  'blogPosts___image___localFile___birthtimeMs' |
  'blogPosts___image___localFile___blksize' |
  'blogPosts___image___localFile___blocks' |
  'blogPosts___image___localFile___url' |
  'blogPosts___image___localFile___publicURL' |
  'blogPosts___image___localFile___id' |
  'blogPosts___image___localFile___children' |
  'blogPosts___image___fixed___base64' |
  'blogPosts___image___fixed___tracedSVG' |
  'blogPosts___image___fixed___aspectRatio' |
  'blogPosts___image___fixed___width' |
  'blogPosts___image___fixed___height' |
  'blogPosts___image___fixed___src' |
  'blogPosts___image___fixed___srcSet' |
  'blogPosts___image___fixed___srcWebp' |
  'blogPosts___image___fixed___srcSetWebp' |
  'blogPosts___image___resolutions___base64' |
  'blogPosts___image___resolutions___tracedSVG' |
  'blogPosts___image___resolutions___aspectRatio' |
  'blogPosts___image___resolutions___width' |
  'blogPosts___image___resolutions___height' |
  'blogPosts___image___resolutions___src' |
  'blogPosts___image___resolutions___srcSet' |
  'blogPosts___image___resolutions___srcWebp' |
  'blogPosts___image___resolutions___srcSetWebp' |
  'blogPosts___image___fluid___base64' |
  'blogPosts___image___fluid___tracedSVG' |
  'blogPosts___image___fluid___aspectRatio' |
  'blogPosts___image___fluid___src' |
  'blogPosts___image___fluid___srcSet' |
  'blogPosts___image___fluid___srcWebp' |
  'blogPosts___image___fluid___srcSetWebp' |
  'blogPosts___image___fluid___sizes' |
  'blogPosts___image___sizes___base64' |
  'blogPosts___image___sizes___tracedSVG' |
  'blogPosts___image___sizes___aspectRatio' |
  'blogPosts___image___sizes___src' |
  'blogPosts___image___sizes___srcSet' |
  'blogPosts___image___sizes___srcWebp' |
  'blogPosts___image___sizes___srcSetWebp' |
  'blogPosts___image___sizes___sizes' |
  'blogPosts___image___resize___base64' |
  'blogPosts___image___resize___tracedSVG' |
  'blogPosts___image___resize___src' |
  'blogPosts___image___resize___width' |
  'blogPosts___image___resize___height' |
  'blogPosts___image___resize___aspectRatio' |
  'blogPosts___description___id' |
  'blogPosts___description___parent___id' |
  'blogPosts___description___parent___children' |
  'blogPosts___description___children' |
  'blogPosts___description___children___id' |
  'blogPosts___description___children___children' |
  'blogPosts___description___internal___content' |
  'blogPosts___description___internal___contentDigest' |
  'blogPosts___description___internal___description' |
  'blogPosts___description___internal___fieldOwners' |
  'blogPosts___description___internal___ignoreType' |
  'blogPosts___description___internal___mediaType' |
  'blogPosts___description___internal___owner' |
  'blogPosts___description___internal___type' |
  'blogPosts___description___description' |
  'blogPosts___body___id' |
  'blogPosts___body___parent___id' |
  'blogPosts___body___parent___children' |
  'blogPosts___body___children' |
  'blogPosts___body___children___id' |
  'blogPosts___body___children___children' |
  'blogPosts___body___internal___content' |
  'blogPosts___body___internal___contentDigest' |
  'blogPosts___body___internal___description' |
  'blogPosts___body___internal___fieldOwners' |
  'blogPosts___body___internal___ignoreType' |
  'blogPosts___body___internal___mediaType' |
  'blogPosts___body___internal___owner' |
  'blogPosts___body___internal___type' |
  'blogPosts___body___body' |
  'blogPosts___spaceId' |
  'blogPosts___contentful_id' |
  'blogPosts___createdAt' |
  'blogPosts___updatedAt' |
  'blogPosts___sys___revision' |
  'blogPosts___node_locale' |
  'blogPosts___block_featured_blog_posts' |
  'blogPosts___block_featured_blog_posts___id' |
  'blogPosts___block_featured_blog_posts___parent___id' |
  'blogPosts___block_featured_blog_posts___parent___children' |
  'blogPosts___block_featured_blog_posts___children' |
  'blogPosts___block_featured_blog_posts___children___id' |
  'blogPosts___block_featured_blog_posts___children___children' |
  'blogPosts___block_featured_blog_posts___internal___content' |
  'blogPosts___block_featured_blog_posts___internal___contentDigest' |
  'blogPosts___block_featured_blog_posts___internal___description' |
  'blogPosts___block_featured_blog_posts___internal___fieldOwners' |
  'blogPosts___block_featured_blog_posts___internal___ignoreType' |
  'blogPosts___block_featured_blog_posts___internal___mediaType' |
  'blogPosts___block_featured_blog_posts___internal___owner' |
  'blogPosts___block_featured_blog_posts___internal___type' |
  'blogPosts___block_featured_blog_posts___title' |
  'blogPosts___block_featured_blog_posts___blogPosts' |
  'blogPosts___block_featured_blog_posts___blogPosts___id' |
  'blogPosts___block_featured_blog_posts___blogPosts___children' |
  'blogPosts___block_featured_blog_posts___blogPosts___title' |
  'blogPosts___block_featured_blog_posts___blogPosts___slug' |
  'blogPosts___block_featured_blog_posts___blogPosts___publishDate' |
  'blogPosts___block_featured_blog_posts___blogPosts___spaceId' |
  'blogPosts___block_featured_blog_posts___blogPosts___contentful_id' |
  'blogPosts___block_featured_blog_posts___blogPosts___createdAt' |
  'blogPosts___block_featured_blog_posts___blogPosts___updatedAt' |
  'blogPosts___block_featured_blog_posts___blogPosts___node_locale' |
  'blogPosts___block_featured_blog_posts___blogPosts___block_featured_blog_posts' |
  'blogPosts___block_featured_blog_posts___page' |
  'blogPosts___block_featured_blog_posts___page___id' |
  'blogPosts___block_featured_blog_posts___page___children' |
  'blogPosts___block_featured_blog_posts___page___title' |
  'blogPosts___block_featured_blog_posts___page___slug' |
  'blogPosts___block_featured_blog_posts___page___spaceId' |
  'blogPosts___block_featured_blog_posts___page___contentful_id' |
  'blogPosts___block_featured_blog_posts___page___createdAt' |
  'blogPosts___block_featured_blog_posts___page___updatedAt' |
  'blogPosts___block_featured_blog_posts___page___node_locale' |
  'blogPosts___block_featured_blog_posts___spaceId' |
  'blogPosts___block_featured_blog_posts___contentful_id' |
  'blogPosts___block_featured_blog_posts___createdAt' |
  'blogPosts___block_featured_blog_posts___updatedAt' |
  'blogPosts___block_featured_blog_posts___sys___revision' |
  'blogPosts___block_featured_blog_posts___node_locale' |
  'blogPosts___childContentfulBlogPostDescriptionTextNode___id' |
  'blogPosts___childContentfulBlogPostDescriptionTextNode___parent___id' |
  'blogPosts___childContentfulBlogPostDescriptionTextNode___parent___children' |
  'blogPosts___childContentfulBlogPostDescriptionTextNode___children' |
  'blogPosts___childContentfulBlogPostDescriptionTextNode___children___id' |
  'blogPosts___childContentfulBlogPostDescriptionTextNode___children___children' |
  'blogPosts___childContentfulBlogPostDescriptionTextNode___internal___content' |
  'blogPosts___childContentfulBlogPostDescriptionTextNode___internal___contentDigest' |
  'blogPosts___childContentfulBlogPostDescriptionTextNode___internal___description' |
  'blogPosts___childContentfulBlogPostDescriptionTextNode___internal___fieldOwners' |
  'blogPosts___childContentfulBlogPostDescriptionTextNode___internal___ignoreType' |
  'blogPosts___childContentfulBlogPostDescriptionTextNode___internal___mediaType' |
  'blogPosts___childContentfulBlogPostDescriptionTextNode___internal___owner' |
  'blogPosts___childContentfulBlogPostDescriptionTextNode___internal___type' |
  'blogPosts___childContentfulBlogPostDescriptionTextNode___description' |
  'blogPosts___childContentfulBlogPostBodyTextNode___id' |
  'blogPosts___childContentfulBlogPostBodyTextNode___parent___id' |
  'blogPosts___childContentfulBlogPostBodyTextNode___parent___children' |
  'blogPosts___childContentfulBlogPostBodyTextNode___children' |
  'blogPosts___childContentfulBlogPostBodyTextNode___children___id' |
  'blogPosts___childContentfulBlogPostBodyTextNode___children___children' |
  'blogPosts___childContentfulBlogPostBodyTextNode___internal___content' |
  'blogPosts___childContentfulBlogPostBodyTextNode___internal___contentDigest' |
  'blogPosts___childContentfulBlogPostBodyTextNode___internal___description' |
  'blogPosts___childContentfulBlogPostBodyTextNode___internal___fieldOwners' |
  'blogPosts___childContentfulBlogPostBodyTextNode___internal___ignoreType' |
  'blogPosts___childContentfulBlogPostBodyTextNode___internal___mediaType' |
  'blogPosts___childContentfulBlogPostBodyTextNode___internal___owner' |
  'blogPosts___childContentfulBlogPostBodyTextNode___internal___type' |
  'blogPosts___childContentfulBlogPostBodyTextNode___body' |
  'page' |
  'page___id' |
  'page___parent___id' |
  'page___parent___parent___id' |
  'page___parent___parent___children' |
  'page___parent___children' |
  'page___parent___children___id' |
  'page___parent___children___children' |
  'page___parent___internal___content' |
  'page___parent___internal___contentDigest' |
  'page___parent___internal___description' |
  'page___parent___internal___fieldOwners' |
  'page___parent___internal___ignoreType' |
  'page___parent___internal___mediaType' |
  'page___parent___internal___owner' |
  'page___parent___internal___type' |
  'page___children' |
  'page___children___id' |
  'page___children___parent___id' |
  'page___children___parent___children' |
  'page___children___children' |
  'page___children___children___id' |
  'page___children___children___children' |
  'page___children___internal___content' |
  'page___children___internal___contentDigest' |
  'page___children___internal___description' |
  'page___children___internal___fieldOwners' |
  'page___children___internal___ignoreType' |
  'page___children___internal___mediaType' |
  'page___children___internal___owner' |
  'page___children___internal___type' |
  'page___internal___content' |
  'page___internal___contentDigest' |
  'page___internal___description' |
  'page___internal___fieldOwners' |
  'page___internal___ignoreType' |
  'page___internal___mediaType' |
  'page___internal___owner' |
  'page___internal___type' |
  'page___title' |
  'page___slug' |
  'page___spaceId' |
  'page___contentful_id' |
  'page___createdAt' |
  'page___updatedAt' |
  'page___sys___revision' |
  'page___node_locale' |
  'spaceId' |
  'contentful_id' |
  'createdAt' |
  'updatedAt' |
  'sys___revision' |
  'sys___contentType___sys___type' |
  'sys___contentType___sys___linkType' |
  'sys___contentType___sys___id' |
  'sys___contentType___sys___contentful_id' |
  'node_locale';

export type ContentfulBlockFeaturedBlogPostsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  blogPosts?: Maybe<ContentfulBlogPostFilterListInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlockFeaturedBlogPostsSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlockFeaturedBlogPostsFilterListInput = {
  elemMatch?: Maybe<ContentfulBlockFeaturedBlogPostsFilterInput>;
};

export type ContentfulBlockFeaturedBlogPostsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockFeaturedBlogPostsEdge>;
  nodes: Array<ContentfulBlockFeaturedBlogPosts>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlockFeaturedBlogPostsSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlockFeaturedBlogPostsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlockFeaturedBlogPostsSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulBlockFeaturedBlogPostsSysContentType>;
};

export type ContentfulBlockFeaturedBlogPostsSysContentType = {
  sys?: Maybe<ContentfulBlockFeaturedBlogPostsSysContentTypeSys>;
};

export type ContentfulBlockFeaturedBlogPostsSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulBlockFeaturedBlogPostsSysContentTypeSysFilterInput>;
};

export type ContentfulBlockFeaturedBlogPostsSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulBlockFeaturedBlogPostsSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlockFeaturedBlogPostsSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulBlockFeaturedBlogPostsSysContentTypeFilterInput>;
};

export type ContentfulBlockFeaturedProducts = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  products?: Maybe<Array<Maybe<Scalars['String']>>>;
  page?: Maybe<Array<Maybe<ContentfulPage>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulBlockFeaturedProductsSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulBlockFeaturedProductsCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulBlockFeaturedProductsUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulBlockFeaturedProductsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockFeaturedProductsEdge>;
  nodes: Array<ContentfulBlockFeaturedProducts>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlockFeaturedProductsGroupConnection>;
};


export type ContentfulBlockFeaturedProductsConnectionDistinctArgs = {
  field: ContentfulBlockFeaturedProductsFieldsEnum;
};


export type ContentfulBlockFeaturedProductsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlockFeaturedProductsFieldsEnum;
};

export type ContentfulBlockFeaturedProductsEdge = {
  next?: Maybe<ContentfulBlockFeaturedProducts>;
  node: ContentfulBlockFeaturedProducts;
  previous?: Maybe<ContentfulBlockFeaturedProducts>;
};

export type ContentfulBlockFeaturedProductsFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'title' |
  'products' |
  'page' |
  'page___id' |
  'page___parent___id' |
  'page___parent___parent___id' |
  'page___parent___parent___children' |
  'page___parent___children' |
  'page___parent___children___id' |
  'page___parent___children___children' |
  'page___parent___internal___content' |
  'page___parent___internal___contentDigest' |
  'page___parent___internal___description' |
  'page___parent___internal___fieldOwners' |
  'page___parent___internal___ignoreType' |
  'page___parent___internal___mediaType' |
  'page___parent___internal___owner' |
  'page___parent___internal___type' |
  'page___children' |
  'page___children___id' |
  'page___children___parent___id' |
  'page___children___parent___children' |
  'page___children___children' |
  'page___children___children___id' |
  'page___children___children___children' |
  'page___children___internal___content' |
  'page___children___internal___contentDigest' |
  'page___children___internal___description' |
  'page___children___internal___fieldOwners' |
  'page___children___internal___ignoreType' |
  'page___children___internal___mediaType' |
  'page___children___internal___owner' |
  'page___children___internal___type' |
  'page___internal___content' |
  'page___internal___contentDigest' |
  'page___internal___description' |
  'page___internal___fieldOwners' |
  'page___internal___ignoreType' |
  'page___internal___mediaType' |
  'page___internal___owner' |
  'page___internal___type' |
  'page___title' |
  'page___slug' |
  'page___spaceId' |
  'page___contentful_id' |
  'page___createdAt' |
  'page___updatedAt' |
  'page___sys___revision' |
  'page___node_locale' |
  'spaceId' |
  'contentful_id' |
  'createdAt' |
  'updatedAt' |
  'sys___revision' |
  'sys___contentType___sys___type' |
  'sys___contentType___sys___linkType' |
  'sys___contentType___sys___id' |
  'sys___contentType___sys___contentful_id' |
  'node_locale';

export type ContentfulBlockFeaturedProductsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  products?: Maybe<StringQueryOperatorInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlockFeaturedProductsSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlockFeaturedProductsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockFeaturedProductsEdge>;
  nodes: Array<ContentfulBlockFeaturedProducts>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlockFeaturedProductsSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlockFeaturedProductsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlockFeaturedProductsSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulBlockFeaturedProductsSysContentType>;
};

export type ContentfulBlockFeaturedProductsSysContentType = {
  sys?: Maybe<ContentfulBlockFeaturedProductsSysContentTypeSys>;
};

export type ContentfulBlockFeaturedProductsSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulBlockFeaturedProductsSysContentTypeSysFilterInput>;
};

export type ContentfulBlockFeaturedProductsSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulBlockFeaturedProductsSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlockFeaturedProductsSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulBlockFeaturedProductsSysContentTypeFilterInput>;
};

export type ContentfulBlockForm = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  sendToMailchimp?: Maybe<Scalars['Boolean']>;
  sendToNetlifyForms?: Maybe<Scalars['Boolean']>;
  successTitle?: Maybe<Scalars['String']>;
  extraTitle?: Maybe<Scalars['String']>;
  contentfulfields?: Maybe<Array<Maybe<Scalars['String']>>>;
  page?: Maybe<Array<Maybe<ContentfulPage>>>;
  successDescription?: Maybe<ContentfulBlockFormSuccessDescriptionTextNode>;
  extraDescription?: Maybe<ContentfulBlockFormExtraDescriptionTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulBlockFormSys>;
  node_locale?: Maybe<Scalars['String']>;
  description?: Maybe<ContentfulBlockFormDescriptionTextNode>;
  childContentfulBlockFormSuccessDescriptionTextNode?: Maybe<ContentfulBlockFormSuccessDescriptionTextNode>;
  childContentfulBlockFormExtraDescriptionTextNode?: Maybe<ContentfulBlockFormExtraDescriptionTextNode>;
  childContentfulBlockFormDescriptionTextNode?: Maybe<ContentfulBlockFormDescriptionTextNode>;
};


export type ContentfulBlockFormCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulBlockFormUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulBlockFormConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockFormEdge>;
  nodes: Array<ContentfulBlockForm>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlockFormGroupConnection>;
};


export type ContentfulBlockFormConnectionDistinctArgs = {
  field: ContentfulBlockFormFieldsEnum;
};


export type ContentfulBlockFormConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlockFormFieldsEnum;
};

export type ContentfulBlockFormDescriptionTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  description?: Maybe<Scalars['String']>;
};

export type ContentfulBlockFormDescriptionTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockFormDescriptionTextNodeEdge>;
  nodes: Array<ContentfulBlockFormDescriptionTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlockFormDescriptionTextNodeGroupConnection>;
};


export type ContentfulBlockFormDescriptionTextNodeConnectionDistinctArgs = {
  field: ContentfulBlockFormDescriptionTextNodeFieldsEnum;
};


export type ContentfulBlockFormDescriptionTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlockFormDescriptionTextNodeFieldsEnum;
};

export type ContentfulBlockFormDescriptionTextNodeEdge = {
  next?: Maybe<ContentfulBlockFormDescriptionTextNode>;
  node: ContentfulBlockFormDescriptionTextNode;
  previous?: Maybe<ContentfulBlockFormDescriptionTextNode>;
};

export type ContentfulBlockFormDescriptionTextNodeFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'description';

export type ContentfulBlockFormDescriptionTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlockFormDescriptionTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockFormDescriptionTextNodeEdge>;
  nodes: Array<ContentfulBlockFormDescriptionTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlockFormDescriptionTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlockFormDescriptionTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlockFormEdge = {
  next?: Maybe<ContentfulBlockForm>;
  node: ContentfulBlockForm;
  previous?: Maybe<ContentfulBlockForm>;
};

export type ContentfulBlockFormExtraDescriptionTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  extraDescription?: Maybe<Scalars['String']>;
};

export type ContentfulBlockFormExtraDescriptionTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockFormExtraDescriptionTextNodeEdge>;
  nodes: Array<ContentfulBlockFormExtraDescriptionTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlockFormExtraDescriptionTextNodeGroupConnection>;
};


export type ContentfulBlockFormExtraDescriptionTextNodeConnectionDistinctArgs = {
  field: ContentfulBlockFormExtraDescriptionTextNodeFieldsEnum;
};


export type ContentfulBlockFormExtraDescriptionTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlockFormExtraDescriptionTextNodeFieldsEnum;
};

export type ContentfulBlockFormExtraDescriptionTextNodeEdge = {
  next?: Maybe<ContentfulBlockFormExtraDescriptionTextNode>;
  node: ContentfulBlockFormExtraDescriptionTextNode;
  previous?: Maybe<ContentfulBlockFormExtraDescriptionTextNode>;
};

export type ContentfulBlockFormExtraDescriptionTextNodeFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'extraDescription';

export type ContentfulBlockFormExtraDescriptionTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  extraDescription?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlockFormExtraDescriptionTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockFormExtraDescriptionTextNodeEdge>;
  nodes: Array<ContentfulBlockFormExtraDescriptionTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlockFormExtraDescriptionTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlockFormExtraDescriptionTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlockFormFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'title' |
  'sendToMailchimp' |
  'sendToNetlifyForms' |
  'successTitle' |
  'extraTitle' |
  'contentfulfields' |
  'page' |
  'page___id' |
  'page___parent___id' |
  'page___parent___parent___id' |
  'page___parent___parent___children' |
  'page___parent___children' |
  'page___parent___children___id' |
  'page___parent___children___children' |
  'page___parent___internal___content' |
  'page___parent___internal___contentDigest' |
  'page___parent___internal___description' |
  'page___parent___internal___fieldOwners' |
  'page___parent___internal___ignoreType' |
  'page___parent___internal___mediaType' |
  'page___parent___internal___owner' |
  'page___parent___internal___type' |
  'page___children' |
  'page___children___id' |
  'page___children___parent___id' |
  'page___children___parent___children' |
  'page___children___children' |
  'page___children___children___id' |
  'page___children___children___children' |
  'page___children___internal___content' |
  'page___children___internal___contentDigest' |
  'page___children___internal___description' |
  'page___children___internal___fieldOwners' |
  'page___children___internal___ignoreType' |
  'page___children___internal___mediaType' |
  'page___children___internal___owner' |
  'page___children___internal___type' |
  'page___internal___content' |
  'page___internal___contentDigest' |
  'page___internal___description' |
  'page___internal___fieldOwners' |
  'page___internal___ignoreType' |
  'page___internal___mediaType' |
  'page___internal___owner' |
  'page___internal___type' |
  'page___title' |
  'page___slug' |
  'page___spaceId' |
  'page___contentful_id' |
  'page___createdAt' |
  'page___updatedAt' |
  'page___sys___revision' |
  'page___node_locale' |
  'successDescription___id' |
  'successDescription___parent___id' |
  'successDescription___parent___parent___id' |
  'successDescription___parent___parent___children' |
  'successDescription___parent___children' |
  'successDescription___parent___children___id' |
  'successDescription___parent___children___children' |
  'successDescription___parent___internal___content' |
  'successDescription___parent___internal___contentDigest' |
  'successDescription___parent___internal___description' |
  'successDescription___parent___internal___fieldOwners' |
  'successDescription___parent___internal___ignoreType' |
  'successDescription___parent___internal___mediaType' |
  'successDescription___parent___internal___owner' |
  'successDescription___parent___internal___type' |
  'successDescription___children' |
  'successDescription___children___id' |
  'successDescription___children___parent___id' |
  'successDescription___children___parent___children' |
  'successDescription___children___children' |
  'successDescription___children___children___id' |
  'successDescription___children___children___children' |
  'successDescription___children___internal___content' |
  'successDescription___children___internal___contentDigest' |
  'successDescription___children___internal___description' |
  'successDescription___children___internal___fieldOwners' |
  'successDescription___children___internal___ignoreType' |
  'successDescription___children___internal___mediaType' |
  'successDescription___children___internal___owner' |
  'successDescription___children___internal___type' |
  'successDescription___internal___content' |
  'successDescription___internal___contentDigest' |
  'successDescription___internal___description' |
  'successDescription___internal___fieldOwners' |
  'successDescription___internal___ignoreType' |
  'successDescription___internal___mediaType' |
  'successDescription___internal___owner' |
  'successDescription___internal___type' |
  'successDescription___successDescription' |
  'extraDescription___id' |
  'extraDescription___parent___id' |
  'extraDescription___parent___parent___id' |
  'extraDescription___parent___parent___children' |
  'extraDescription___parent___children' |
  'extraDescription___parent___children___id' |
  'extraDescription___parent___children___children' |
  'extraDescription___parent___internal___content' |
  'extraDescription___parent___internal___contentDigest' |
  'extraDescription___parent___internal___description' |
  'extraDescription___parent___internal___fieldOwners' |
  'extraDescription___parent___internal___ignoreType' |
  'extraDescription___parent___internal___mediaType' |
  'extraDescription___parent___internal___owner' |
  'extraDescription___parent___internal___type' |
  'extraDescription___children' |
  'extraDescription___children___id' |
  'extraDescription___children___parent___id' |
  'extraDescription___children___parent___children' |
  'extraDescription___children___children' |
  'extraDescription___children___children___id' |
  'extraDescription___children___children___children' |
  'extraDescription___children___internal___content' |
  'extraDescription___children___internal___contentDigest' |
  'extraDescription___children___internal___description' |
  'extraDescription___children___internal___fieldOwners' |
  'extraDescription___children___internal___ignoreType' |
  'extraDescription___children___internal___mediaType' |
  'extraDescription___children___internal___owner' |
  'extraDescription___children___internal___type' |
  'extraDescription___internal___content' |
  'extraDescription___internal___contentDigest' |
  'extraDescription___internal___description' |
  'extraDescription___internal___fieldOwners' |
  'extraDescription___internal___ignoreType' |
  'extraDescription___internal___mediaType' |
  'extraDescription___internal___owner' |
  'extraDescription___internal___type' |
  'extraDescription___extraDescription' |
  'spaceId' |
  'contentful_id' |
  'createdAt' |
  'updatedAt' |
  'sys___revision' |
  'sys___contentType___sys___type' |
  'sys___contentType___sys___linkType' |
  'sys___contentType___sys___id' |
  'sys___contentType___sys___contentful_id' |
  'node_locale' |
  'description___id' |
  'description___parent___id' |
  'description___parent___parent___id' |
  'description___parent___parent___children' |
  'description___parent___children' |
  'description___parent___children___id' |
  'description___parent___children___children' |
  'description___parent___internal___content' |
  'description___parent___internal___contentDigest' |
  'description___parent___internal___description' |
  'description___parent___internal___fieldOwners' |
  'description___parent___internal___ignoreType' |
  'description___parent___internal___mediaType' |
  'description___parent___internal___owner' |
  'description___parent___internal___type' |
  'description___children' |
  'description___children___id' |
  'description___children___parent___id' |
  'description___children___parent___children' |
  'description___children___children' |
  'description___children___children___id' |
  'description___children___children___children' |
  'description___children___internal___content' |
  'description___children___internal___contentDigest' |
  'description___children___internal___description' |
  'description___children___internal___fieldOwners' |
  'description___children___internal___ignoreType' |
  'description___children___internal___mediaType' |
  'description___children___internal___owner' |
  'description___children___internal___type' |
  'description___internal___content' |
  'description___internal___contentDigest' |
  'description___internal___description' |
  'description___internal___fieldOwners' |
  'description___internal___ignoreType' |
  'description___internal___mediaType' |
  'description___internal___owner' |
  'description___internal___type' |
  'description___description' |
  'childContentfulBlockFormSuccessDescriptionTextNode___id' |
  'childContentfulBlockFormSuccessDescriptionTextNode___parent___id' |
  'childContentfulBlockFormSuccessDescriptionTextNode___parent___parent___id' |
  'childContentfulBlockFormSuccessDescriptionTextNode___parent___parent___children' |
  'childContentfulBlockFormSuccessDescriptionTextNode___parent___children' |
  'childContentfulBlockFormSuccessDescriptionTextNode___parent___children___id' |
  'childContentfulBlockFormSuccessDescriptionTextNode___parent___children___children' |
  'childContentfulBlockFormSuccessDescriptionTextNode___parent___internal___content' |
  'childContentfulBlockFormSuccessDescriptionTextNode___parent___internal___contentDigest' |
  'childContentfulBlockFormSuccessDescriptionTextNode___parent___internal___description' |
  'childContentfulBlockFormSuccessDescriptionTextNode___parent___internal___fieldOwners' |
  'childContentfulBlockFormSuccessDescriptionTextNode___parent___internal___ignoreType' |
  'childContentfulBlockFormSuccessDescriptionTextNode___parent___internal___mediaType' |
  'childContentfulBlockFormSuccessDescriptionTextNode___parent___internal___owner' |
  'childContentfulBlockFormSuccessDescriptionTextNode___parent___internal___type' |
  'childContentfulBlockFormSuccessDescriptionTextNode___children' |
  'childContentfulBlockFormSuccessDescriptionTextNode___children___id' |
  'childContentfulBlockFormSuccessDescriptionTextNode___children___parent___id' |
  'childContentfulBlockFormSuccessDescriptionTextNode___children___parent___children' |
  'childContentfulBlockFormSuccessDescriptionTextNode___children___children' |
  'childContentfulBlockFormSuccessDescriptionTextNode___children___children___id' |
  'childContentfulBlockFormSuccessDescriptionTextNode___children___children___children' |
  'childContentfulBlockFormSuccessDescriptionTextNode___children___internal___content' |
  'childContentfulBlockFormSuccessDescriptionTextNode___children___internal___contentDigest' |
  'childContentfulBlockFormSuccessDescriptionTextNode___children___internal___description' |
  'childContentfulBlockFormSuccessDescriptionTextNode___children___internal___fieldOwners' |
  'childContentfulBlockFormSuccessDescriptionTextNode___children___internal___ignoreType' |
  'childContentfulBlockFormSuccessDescriptionTextNode___children___internal___mediaType' |
  'childContentfulBlockFormSuccessDescriptionTextNode___children___internal___owner' |
  'childContentfulBlockFormSuccessDescriptionTextNode___children___internal___type' |
  'childContentfulBlockFormSuccessDescriptionTextNode___internal___content' |
  'childContentfulBlockFormSuccessDescriptionTextNode___internal___contentDigest' |
  'childContentfulBlockFormSuccessDescriptionTextNode___internal___description' |
  'childContentfulBlockFormSuccessDescriptionTextNode___internal___fieldOwners' |
  'childContentfulBlockFormSuccessDescriptionTextNode___internal___ignoreType' |
  'childContentfulBlockFormSuccessDescriptionTextNode___internal___mediaType' |
  'childContentfulBlockFormSuccessDescriptionTextNode___internal___owner' |
  'childContentfulBlockFormSuccessDescriptionTextNode___internal___type' |
  'childContentfulBlockFormSuccessDescriptionTextNode___successDescription' |
  'childContentfulBlockFormExtraDescriptionTextNode___id' |
  'childContentfulBlockFormExtraDescriptionTextNode___parent___id' |
  'childContentfulBlockFormExtraDescriptionTextNode___parent___parent___id' |
  'childContentfulBlockFormExtraDescriptionTextNode___parent___parent___children' |
  'childContentfulBlockFormExtraDescriptionTextNode___parent___children' |
  'childContentfulBlockFormExtraDescriptionTextNode___parent___children___id' |
  'childContentfulBlockFormExtraDescriptionTextNode___parent___children___children' |
  'childContentfulBlockFormExtraDescriptionTextNode___parent___internal___content' |
  'childContentfulBlockFormExtraDescriptionTextNode___parent___internal___contentDigest' |
  'childContentfulBlockFormExtraDescriptionTextNode___parent___internal___description' |
  'childContentfulBlockFormExtraDescriptionTextNode___parent___internal___fieldOwners' |
  'childContentfulBlockFormExtraDescriptionTextNode___parent___internal___ignoreType' |
  'childContentfulBlockFormExtraDescriptionTextNode___parent___internal___mediaType' |
  'childContentfulBlockFormExtraDescriptionTextNode___parent___internal___owner' |
  'childContentfulBlockFormExtraDescriptionTextNode___parent___internal___type' |
  'childContentfulBlockFormExtraDescriptionTextNode___children' |
  'childContentfulBlockFormExtraDescriptionTextNode___children___id' |
  'childContentfulBlockFormExtraDescriptionTextNode___children___parent___id' |
  'childContentfulBlockFormExtraDescriptionTextNode___children___parent___children' |
  'childContentfulBlockFormExtraDescriptionTextNode___children___children' |
  'childContentfulBlockFormExtraDescriptionTextNode___children___children___id' |
  'childContentfulBlockFormExtraDescriptionTextNode___children___children___children' |
  'childContentfulBlockFormExtraDescriptionTextNode___children___internal___content' |
  'childContentfulBlockFormExtraDescriptionTextNode___children___internal___contentDigest' |
  'childContentfulBlockFormExtraDescriptionTextNode___children___internal___description' |
  'childContentfulBlockFormExtraDescriptionTextNode___children___internal___fieldOwners' |
  'childContentfulBlockFormExtraDescriptionTextNode___children___internal___ignoreType' |
  'childContentfulBlockFormExtraDescriptionTextNode___children___internal___mediaType' |
  'childContentfulBlockFormExtraDescriptionTextNode___children___internal___owner' |
  'childContentfulBlockFormExtraDescriptionTextNode___children___internal___type' |
  'childContentfulBlockFormExtraDescriptionTextNode___internal___content' |
  'childContentfulBlockFormExtraDescriptionTextNode___internal___contentDigest' |
  'childContentfulBlockFormExtraDescriptionTextNode___internal___description' |
  'childContentfulBlockFormExtraDescriptionTextNode___internal___fieldOwners' |
  'childContentfulBlockFormExtraDescriptionTextNode___internal___ignoreType' |
  'childContentfulBlockFormExtraDescriptionTextNode___internal___mediaType' |
  'childContentfulBlockFormExtraDescriptionTextNode___internal___owner' |
  'childContentfulBlockFormExtraDescriptionTextNode___internal___type' |
  'childContentfulBlockFormExtraDescriptionTextNode___extraDescription' |
  'childContentfulBlockFormDescriptionTextNode___id' |
  'childContentfulBlockFormDescriptionTextNode___parent___id' |
  'childContentfulBlockFormDescriptionTextNode___parent___parent___id' |
  'childContentfulBlockFormDescriptionTextNode___parent___parent___children' |
  'childContentfulBlockFormDescriptionTextNode___parent___children' |
  'childContentfulBlockFormDescriptionTextNode___parent___children___id' |
  'childContentfulBlockFormDescriptionTextNode___parent___children___children' |
  'childContentfulBlockFormDescriptionTextNode___parent___internal___content' |
  'childContentfulBlockFormDescriptionTextNode___parent___internal___contentDigest' |
  'childContentfulBlockFormDescriptionTextNode___parent___internal___description' |
  'childContentfulBlockFormDescriptionTextNode___parent___internal___fieldOwners' |
  'childContentfulBlockFormDescriptionTextNode___parent___internal___ignoreType' |
  'childContentfulBlockFormDescriptionTextNode___parent___internal___mediaType' |
  'childContentfulBlockFormDescriptionTextNode___parent___internal___owner' |
  'childContentfulBlockFormDescriptionTextNode___parent___internal___type' |
  'childContentfulBlockFormDescriptionTextNode___children' |
  'childContentfulBlockFormDescriptionTextNode___children___id' |
  'childContentfulBlockFormDescriptionTextNode___children___parent___id' |
  'childContentfulBlockFormDescriptionTextNode___children___parent___children' |
  'childContentfulBlockFormDescriptionTextNode___children___children' |
  'childContentfulBlockFormDescriptionTextNode___children___children___id' |
  'childContentfulBlockFormDescriptionTextNode___children___children___children' |
  'childContentfulBlockFormDescriptionTextNode___children___internal___content' |
  'childContentfulBlockFormDescriptionTextNode___children___internal___contentDigest' |
  'childContentfulBlockFormDescriptionTextNode___children___internal___description' |
  'childContentfulBlockFormDescriptionTextNode___children___internal___fieldOwners' |
  'childContentfulBlockFormDescriptionTextNode___children___internal___ignoreType' |
  'childContentfulBlockFormDescriptionTextNode___children___internal___mediaType' |
  'childContentfulBlockFormDescriptionTextNode___children___internal___owner' |
  'childContentfulBlockFormDescriptionTextNode___children___internal___type' |
  'childContentfulBlockFormDescriptionTextNode___internal___content' |
  'childContentfulBlockFormDescriptionTextNode___internal___contentDigest' |
  'childContentfulBlockFormDescriptionTextNode___internal___description' |
  'childContentfulBlockFormDescriptionTextNode___internal___fieldOwners' |
  'childContentfulBlockFormDescriptionTextNode___internal___ignoreType' |
  'childContentfulBlockFormDescriptionTextNode___internal___mediaType' |
  'childContentfulBlockFormDescriptionTextNode___internal___owner' |
  'childContentfulBlockFormDescriptionTextNode___internal___type' |
  'childContentfulBlockFormDescriptionTextNode___description';

export type ContentfulBlockFormFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  sendToMailchimp?: Maybe<BooleanQueryOperatorInput>;
  sendToNetlifyForms?: Maybe<BooleanQueryOperatorInput>;
  successTitle?: Maybe<StringQueryOperatorInput>;
  extraTitle?: Maybe<StringQueryOperatorInput>;
  contentfulfields?: Maybe<StringQueryOperatorInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
  successDescription?: Maybe<ContentfulBlockFormSuccessDescriptionTextNodeFilterInput>;
  extraDescription?: Maybe<ContentfulBlockFormExtraDescriptionTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlockFormSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<ContentfulBlockFormDescriptionTextNodeFilterInput>;
  childContentfulBlockFormSuccessDescriptionTextNode?: Maybe<ContentfulBlockFormSuccessDescriptionTextNodeFilterInput>;
  childContentfulBlockFormExtraDescriptionTextNode?: Maybe<ContentfulBlockFormExtraDescriptionTextNodeFilterInput>;
  childContentfulBlockFormDescriptionTextNode?: Maybe<ContentfulBlockFormDescriptionTextNodeFilterInput>;
};

export type ContentfulBlockFormGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockFormEdge>;
  nodes: Array<ContentfulBlockForm>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlockFormSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlockFormFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlockFormSuccessDescriptionTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  successDescription?: Maybe<Scalars['String']>;
};

export type ContentfulBlockFormSuccessDescriptionTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockFormSuccessDescriptionTextNodeEdge>;
  nodes: Array<ContentfulBlockFormSuccessDescriptionTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlockFormSuccessDescriptionTextNodeGroupConnection>;
};


export type ContentfulBlockFormSuccessDescriptionTextNodeConnectionDistinctArgs = {
  field: ContentfulBlockFormSuccessDescriptionTextNodeFieldsEnum;
};


export type ContentfulBlockFormSuccessDescriptionTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlockFormSuccessDescriptionTextNodeFieldsEnum;
};

export type ContentfulBlockFormSuccessDescriptionTextNodeEdge = {
  next?: Maybe<ContentfulBlockFormSuccessDescriptionTextNode>;
  node: ContentfulBlockFormSuccessDescriptionTextNode;
  previous?: Maybe<ContentfulBlockFormSuccessDescriptionTextNode>;
};

export type ContentfulBlockFormSuccessDescriptionTextNodeFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'successDescription';

export type ContentfulBlockFormSuccessDescriptionTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  successDescription?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlockFormSuccessDescriptionTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockFormSuccessDescriptionTextNodeEdge>;
  nodes: Array<ContentfulBlockFormSuccessDescriptionTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlockFormSuccessDescriptionTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlockFormSuccessDescriptionTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlockFormSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulBlockFormSysContentType>;
};

export type ContentfulBlockFormSysContentType = {
  sys?: Maybe<ContentfulBlockFormSysContentTypeSys>;
};

export type ContentfulBlockFormSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulBlockFormSysContentTypeSysFilterInput>;
};

export type ContentfulBlockFormSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulBlockFormSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlockFormSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulBlockFormSysContentTypeFilterInput>;
};

export type ContentfulBlockHero = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  picture?: Maybe<ContentfulAsset>;
  page?: Maybe<Array<Maybe<ContentfulPage>>>;
  pictureText?: Maybe<ContentfulBlockHeroPictureTextTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulBlockHeroSys>;
  node_locale?: Maybe<Scalars['String']>;
  childContentfulBlockHeroPictureTextTextNode?: Maybe<ContentfulBlockHeroPictureTextTextNode>;
};


export type ContentfulBlockHeroCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulBlockHeroUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulBlockHeroConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockHeroEdge>;
  nodes: Array<ContentfulBlockHero>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlockHeroGroupConnection>;
};


export type ContentfulBlockHeroConnectionDistinctArgs = {
  field: ContentfulBlockHeroFieldsEnum;
};


export type ContentfulBlockHeroConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlockHeroFieldsEnum;
};

export type ContentfulBlockHeroEdge = {
  next?: Maybe<ContentfulBlockHero>;
  node: ContentfulBlockHero;
  previous?: Maybe<ContentfulBlockHero>;
};

export type ContentfulBlockHeroFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'title' |
  'picture___id' |
  'picture___parent___id' |
  'picture___parent___parent___id' |
  'picture___parent___parent___children' |
  'picture___parent___children' |
  'picture___parent___children___id' |
  'picture___parent___children___children' |
  'picture___parent___internal___content' |
  'picture___parent___internal___contentDigest' |
  'picture___parent___internal___description' |
  'picture___parent___internal___fieldOwners' |
  'picture___parent___internal___ignoreType' |
  'picture___parent___internal___mediaType' |
  'picture___parent___internal___owner' |
  'picture___parent___internal___type' |
  'picture___children' |
  'picture___children___id' |
  'picture___children___parent___id' |
  'picture___children___parent___children' |
  'picture___children___children' |
  'picture___children___children___id' |
  'picture___children___children___children' |
  'picture___children___internal___content' |
  'picture___children___internal___contentDigest' |
  'picture___children___internal___description' |
  'picture___children___internal___fieldOwners' |
  'picture___children___internal___ignoreType' |
  'picture___children___internal___mediaType' |
  'picture___children___internal___owner' |
  'picture___children___internal___type' |
  'picture___internal___content' |
  'picture___internal___contentDigest' |
  'picture___internal___description' |
  'picture___internal___fieldOwners' |
  'picture___internal___ignoreType' |
  'picture___internal___mediaType' |
  'picture___internal___owner' |
  'picture___internal___type' |
  'picture___contentful_id' |
  'picture___file___url' |
  'picture___file___details___size' |
  'picture___file___fileName' |
  'picture___file___contentType' |
  'picture___title' |
  'picture___description' |
  'picture___node_locale' |
  'picture___localFile___sourceInstanceName' |
  'picture___localFile___absolutePath' |
  'picture___localFile___relativePath' |
  'picture___localFile___extension' |
  'picture___localFile___size' |
  'picture___localFile___prettySize' |
  'picture___localFile___modifiedTime' |
  'picture___localFile___accessTime' |
  'picture___localFile___changeTime' |
  'picture___localFile___birthTime' |
  'picture___localFile___root' |
  'picture___localFile___dir' |
  'picture___localFile___base' |
  'picture___localFile___ext' |
  'picture___localFile___name' |
  'picture___localFile___relativeDirectory' |
  'picture___localFile___dev' |
  'picture___localFile___mode' |
  'picture___localFile___nlink' |
  'picture___localFile___uid' |
  'picture___localFile___gid' |
  'picture___localFile___rdev' |
  'picture___localFile___ino' |
  'picture___localFile___atimeMs' |
  'picture___localFile___mtimeMs' |
  'picture___localFile___ctimeMs' |
  'picture___localFile___atime' |
  'picture___localFile___mtime' |
  'picture___localFile___ctime' |
  'picture___localFile___birthtime' |
  'picture___localFile___birthtimeMs' |
  'picture___localFile___blksize' |
  'picture___localFile___blocks' |
  'picture___localFile___url' |
  'picture___localFile___publicURL' |
  'picture___localFile___childImageSharp___id' |
  'picture___localFile___childImageSharp___children' |
  'picture___localFile___id' |
  'picture___localFile___parent___id' |
  'picture___localFile___parent___children' |
  'picture___localFile___children' |
  'picture___localFile___children___id' |
  'picture___localFile___children___children' |
  'picture___localFile___internal___content' |
  'picture___localFile___internal___contentDigest' |
  'picture___localFile___internal___description' |
  'picture___localFile___internal___fieldOwners' |
  'picture___localFile___internal___ignoreType' |
  'picture___localFile___internal___mediaType' |
  'picture___localFile___internal___owner' |
  'picture___localFile___internal___type' |
  'picture___fixed___base64' |
  'picture___fixed___tracedSVG' |
  'picture___fixed___aspectRatio' |
  'picture___fixed___width' |
  'picture___fixed___height' |
  'picture___fixed___src' |
  'picture___fixed___srcSet' |
  'picture___fixed___srcWebp' |
  'picture___fixed___srcSetWebp' |
  'picture___resolutions___base64' |
  'picture___resolutions___tracedSVG' |
  'picture___resolutions___aspectRatio' |
  'picture___resolutions___width' |
  'picture___resolutions___height' |
  'picture___resolutions___src' |
  'picture___resolutions___srcSet' |
  'picture___resolutions___srcWebp' |
  'picture___resolutions___srcSetWebp' |
  'picture___fluid___base64' |
  'picture___fluid___tracedSVG' |
  'picture___fluid___aspectRatio' |
  'picture___fluid___src' |
  'picture___fluid___srcSet' |
  'picture___fluid___srcWebp' |
  'picture___fluid___srcSetWebp' |
  'picture___fluid___sizes' |
  'picture___sizes___base64' |
  'picture___sizes___tracedSVG' |
  'picture___sizes___aspectRatio' |
  'picture___sizes___src' |
  'picture___sizes___srcSet' |
  'picture___sizes___srcWebp' |
  'picture___sizes___srcSetWebp' |
  'picture___sizes___sizes' |
  'picture___resize___base64' |
  'picture___resize___tracedSVG' |
  'picture___resize___src' |
  'picture___resize___width' |
  'picture___resize___height' |
  'picture___resize___aspectRatio' |
  'page' |
  'page___id' |
  'page___parent___id' |
  'page___parent___parent___id' |
  'page___parent___parent___children' |
  'page___parent___children' |
  'page___parent___children___id' |
  'page___parent___children___children' |
  'page___parent___internal___content' |
  'page___parent___internal___contentDigest' |
  'page___parent___internal___description' |
  'page___parent___internal___fieldOwners' |
  'page___parent___internal___ignoreType' |
  'page___parent___internal___mediaType' |
  'page___parent___internal___owner' |
  'page___parent___internal___type' |
  'page___children' |
  'page___children___id' |
  'page___children___parent___id' |
  'page___children___parent___children' |
  'page___children___children' |
  'page___children___children___id' |
  'page___children___children___children' |
  'page___children___internal___content' |
  'page___children___internal___contentDigest' |
  'page___children___internal___description' |
  'page___children___internal___fieldOwners' |
  'page___children___internal___ignoreType' |
  'page___children___internal___mediaType' |
  'page___children___internal___owner' |
  'page___children___internal___type' |
  'page___internal___content' |
  'page___internal___contentDigest' |
  'page___internal___description' |
  'page___internal___fieldOwners' |
  'page___internal___ignoreType' |
  'page___internal___mediaType' |
  'page___internal___owner' |
  'page___internal___type' |
  'page___title' |
  'page___slug' |
  'page___spaceId' |
  'page___contentful_id' |
  'page___createdAt' |
  'page___updatedAt' |
  'page___sys___revision' |
  'page___node_locale' |
  'pictureText___id' |
  'pictureText___parent___id' |
  'pictureText___parent___parent___id' |
  'pictureText___parent___parent___children' |
  'pictureText___parent___children' |
  'pictureText___parent___children___id' |
  'pictureText___parent___children___children' |
  'pictureText___parent___internal___content' |
  'pictureText___parent___internal___contentDigest' |
  'pictureText___parent___internal___description' |
  'pictureText___parent___internal___fieldOwners' |
  'pictureText___parent___internal___ignoreType' |
  'pictureText___parent___internal___mediaType' |
  'pictureText___parent___internal___owner' |
  'pictureText___parent___internal___type' |
  'pictureText___children' |
  'pictureText___children___id' |
  'pictureText___children___parent___id' |
  'pictureText___children___parent___children' |
  'pictureText___children___children' |
  'pictureText___children___children___id' |
  'pictureText___children___children___children' |
  'pictureText___children___internal___content' |
  'pictureText___children___internal___contentDigest' |
  'pictureText___children___internal___description' |
  'pictureText___children___internal___fieldOwners' |
  'pictureText___children___internal___ignoreType' |
  'pictureText___children___internal___mediaType' |
  'pictureText___children___internal___owner' |
  'pictureText___children___internal___type' |
  'pictureText___internal___content' |
  'pictureText___internal___contentDigest' |
  'pictureText___internal___description' |
  'pictureText___internal___fieldOwners' |
  'pictureText___internal___ignoreType' |
  'pictureText___internal___mediaType' |
  'pictureText___internal___owner' |
  'pictureText___internal___type' |
  'pictureText___pictureText' |
  'spaceId' |
  'contentful_id' |
  'createdAt' |
  'updatedAt' |
  'sys___revision' |
  'sys___contentType___sys___type' |
  'sys___contentType___sys___linkType' |
  'sys___contentType___sys___id' |
  'sys___contentType___sys___contentful_id' |
  'node_locale' |
  'childContentfulBlockHeroPictureTextTextNode___id' |
  'childContentfulBlockHeroPictureTextTextNode___parent___id' |
  'childContentfulBlockHeroPictureTextTextNode___parent___parent___id' |
  'childContentfulBlockHeroPictureTextTextNode___parent___parent___children' |
  'childContentfulBlockHeroPictureTextTextNode___parent___children' |
  'childContentfulBlockHeroPictureTextTextNode___parent___children___id' |
  'childContentfulBlockHeroPictureTextTextNode___parent___children___children' |
  'childContentfulBlockHeroPictureTextTextNode___parent___internal___content' |
  'childContentfulBlockHeroPictureTextTextNode___parent___internal___contentDigest' |
  'childContentfulBlockHeroPictureTextTextNode___parent___internal___description' |
  'childContentfulBlockHeroPictureTextTextNode___parent___internal___fieldOwners' |
  'childContentfulBlockHeroPictureTextTextNode___parent___internal___ignoreType' |
  'childContentfulBlockHeroPictureTextTextNode___parent___internal___mediaType' |
  'childContentfulBlockHeroPictureTextTextNode___parent___internal___owner' |
  'childContentfulBlockHeroPictureTextTextNode___parent___internal___type' |
  'childContentfulBlockHeroPictureTextTextNode___children' |
  'childContentfulBlockHeroPictureTextTextNode___children___id' |
  'childContentfulBlockHeroPictureTextTextNode___children___parent___id' |
  'childContentfulBlockHeroPictureTextTextNode___children___parent___children' |
  'childContentfulBlockHeroPictureTextTextNode___children___children' |
  'childContentfulBlockHeroPictureTextTextNode___children___children___id' |
  'childContentfulBlockHeroPictureTextTextNode___children___children___children' |
  'childContentfulBlockHeroPictureTextTextNode___children___internal___content' |
  'childContentfulBlockHeroPictureTextTextNode___children___internal___contentDigest' |
  'childContentfulBlockHeroPictureTextTextNode___children___internal___description' |
  'childContentfulBlockHeroPictureTextTextNode___children___internal___fieldOwners' |
  'childContentfulBlockHeroPictureTextTextNode___children___internal___ignoreType' |
  'childContentfulBlockHeroPictureTextTextNode___children___internal___mediaType' |
  'childContentfulBlockHeroPictureTextTextNode___children___internal___owner' |
  'childContentfulBlockHeroPictureTextTextNode___children___internal___type' |
  'childContentfulBlockHeroPictureTextTextNode___internal___content' |
  'childContentfulBlockHeroPictureTextTextNode___internal___contentDigest' |
  'childContentfulBlockHeroPictureTextTextNode___internal___description' |
  'childContentfulBlockHeroPictureTextTextNode___internal___fieldOwners' |
  'childContentfulBlockHeroPictureTextTextNode___internal___ignoreType' |
  'childContentfulBlockHeroPictureTextTextNode___internal___mediaType' |
  'childContentfulBlockHeroPictureTextTextNode___internal___owner' |
  'childContentfulBlockHeroPictureTextTextNode___internal___type' |
  'childContentfulBlockHeroPictureTextTextNode___pictureText';

export type ContentfulBlockHeroFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  picture?: Maybe<ContentfulAssetFilterInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
  pictureText?: Maybe<ContentfulBlockHeroPictureTextTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlockHeroSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulBlockHeroPictureTextTextNode?: Maybe<ContentfulBlockHeroPictureTextTextNodeFilterInput>;
};

export type ContentfulBlockHeroGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockHeroEdge>;
  nodes: Array<ContentfulBlockHero>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlockHeroPictureTextTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  pictureText?: Maybe<Scalars['String']>;
};

export type ContentfulBlockHeroPictureTextTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockHeroPictureTextTextNodeEdge>;
  nodes: Array<ContentfulBlockHeroPictureTextTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlockHeroPictureTextTextNodeGroupConnection>;
};


export type ContentfulBlockHeroPictureTextTextNodeConnectionDistinctArgs = {
  field: ContentfulBlockHeroPictureTextTextNodeFieldsEnum;
};


export type ContentfulBlockHeroPictureTextTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlockHeroPictureTextTextNodeFieldsEnum;
};

export type ContentfulBlockHeroPictureTextTextNodeEdge = {
  next?: Maybe<ContentfulBlockHeroPictureTextTextNode>;
  node: ContentfulBlockHeroPictureTextTextNode;
  previous?: Maybe<ContentfulBlockHeroPictureTextTextNode>;
};

export type ContentfulBlockHeroPictureTextTextNodeFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'pictureText';

export type ContentfulBlockHeroPictureTextTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  pictureText?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlockHeroPictureTextTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlockHeroPictureTextTextNodeEdge>;
  nodes: Array<ContentfulBlockHeroPictureTextTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlockHeroPictureTextTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlockHeroPictureTextTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlockHeroSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlockHeroFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlockHeroSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulBlockHeroSysContentType>;
};

export type ContentfulBlockHeroSysContentType = {
  sys?: Maybe<ContentfulBlockHeroSysContentTypeSys>;
};

export type ContentfulBlockHeroSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulBlockHeroSysContentTypeSysFilterInput>;
};

export type ContentfulBlockHeroSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulBlockHeroSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlockHeroSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulBlockHeroSysContentTypeFilterInput>;
};

export type ContentfulBlogPost = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  publishDate?: Maybe<Scalars['Date']>;
  image?: Maybe<ContentfulAsset>;
  description?: Maybe<ContentfulBlogPostDescriptionTextNode>;
  body?: Maybe<ContentfulBlogPostBodyTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulBlogPostSys>;
  node_locale?: Maybe<Scalars['String']>;
  block_featured_blog_posts?: Maybe<Array<Maybe<ContentfulBlockFeaturedBlogPosts>>>;
  childContentfulBlogPostDescriptionTextNode?: Maybe<ContentfulBlogPostDescriptionTextNode>;
  childContentfulBlogPostBodyTextNode?: Maybe<ContentfulBlogPostBodyTextNode>;
};


export type ContentfulBlogPostPublishDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulBlogPostCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulBlogPostUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostBodyTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  body?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostBodyTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostBodyTextNodeEdge>;
  nodes: Array<ContentfulBlogPostBodyTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlogPostBodyTextNodeGroupConnection>;
};


export type ContentfulBlogPostBodyTextNodeConnectionDistinctArgs = {
  field: ContentfulBlogPostBodyTextNodeFieldsEnum;
};


export type ContentfulBlogPostBodyTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlogPostBodyTextNodeFieldsEnum;
};

export type ContentfulBlogPostBodyTextNodeEdge = {
  next?: Maybe<ContentfulBlogPostBodyTextNode>;
  node: ContentfulBlogPostBodyTextNode;
  previous?: Maybe<ContentfulBlogPostBodyTextNode>;
};

export type ContentfulBlogPostBodyTextNodeFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'body';

export type ContentfulBlogPostBodyTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  body?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlogPostBodyTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostBodyTextNodeEdge>;
  nodes: Array<ContentfulBlogPostBodyTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostBodyTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlogPostBodyTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlogPostConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostEdge>;
  nodes: Array<ContentfulBlogPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlogPostGroupConnection>;
};


export type ContentfulBlogPostConnectionDistinctArgs = {
  field: ContentfulBlogPostFieldsEnum;
};


export type ContentfulBlogPostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlogPostFieldsEnum;
};

export type ContentfulBlogPostDescriptionTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  description?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostDescriptionTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostDescriptionTextNodeEdge>;
  nodes: Array<ContentfulBlogPostDescriptionTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBlogPostDescriptionTextNodeGroupConnection>;
};


export type ContentfulBlogPostDescriptionTextNodeConnectionDistinctArgs = {
  field: ContentfulBlogPostDescriptionTextNodeFieldsEnum;
};


export type ContentfulBlogPostDescriptionTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBlogPostDescriptionTextNodeFieldsEnum;
};

export type ContentfulBlogPostDescriptionTextNodeEdge = {
  next?: Maybe<ContentfulBlogPostDescriptionTextNode>;
  node: ContentfulBlogPostDescriptionTextNode;
  previous?: Maybe<ContentfulBlogPostDescriptionTextNode>;
};

export type ContentfulBlogPostDescriptionTextNodeFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'description';

export type ContentfulBlogPostDescriptionTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlogPostDescriptionTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostDescriptionTextNodeEdge>;
  nodes: Array<ContentfulBlogPostDescriptionTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostDescriptionTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlogPostDescriptionTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlogPostEdge = {
  next?: Maybe<ContentfulBlogPost>;
  node: ContentfulBlogPost;
  previous?: Maybe<ContentfulBlogPost>;
};

export type ContentfulBlogPostFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'title' |
  'slug' |
  'publishDate' |
  'image___id' |
  'image___parent___id' |
  'image___parent___parent___id' |
  'image___parent___parent___children' |
  'image___parent___children' |
  'image___parent___children___id' |
  'image___parent___children___children' |
  'image___parent___internal___content' |
  'image___parent___internal___contentDigest' |
  'image___parent___internal___description' |
  'image___parent___internal___fieldOwners' |
  'image___parent___internal___ignoreType' |
  'image___parent___internal___mediaType' |
  'image___parent___internal___owner' |
  'image___parent___internal___type' |
  'image___children' |
  'image___children___id' |
  'image___children___parent___id' |
  'image___children___parent___children' |
  'image___children___children' |
  'image___children___children___id' |
  'image___children___children___children' |
  'image___children___internal___content' |
  'image___children___internal___contentDigest' |
  'image___children___internal___description' |
  'image___children___internal___fieldOwners' |
  'image___children___internal___ignoreType' |
  'image___children___internal___mediaType' |
  'image___children___internal___owner' |
  'image___children___internal___type' |
  'image___internal___content' |
  'image___internal___contentDigest' |
  'image___internal___description' |
  'image___internal___fieldOwners' |
  'image___internal___ignoreType' |
  'image___internal___mediaType' |
  'image___internal___owner' |
  'image___internal___type' |
  'image___contentful_id' |
  'image___file___url' |
  'image___file___details___size' |
  'image___file___fileName' |
  'image___file___contentType' |
  'image___title' |
  'image___description' |
  'image___node_locale' |
  'image___localFile___sourceInstanceName' |
  'image___localFile___absolutePath' |
  'image___localFile___relativePath' |
  'image___localFile___extension' |
  'image___localFile___size' |
  'image___localFile___prettySize' |
  'image___localFile___modifiedTime' |
  'image___localFile___accessTime' |
  'image___localFile___changeTime' |
  'image___localFile___birthTime' |
  'image___localFile___root' |
  'image___localFile___dir' |
  'image___localFile___base' |
  'image___localFile___ext' |
  'image___localFile___name' |
  'image___localFile___relativeDirectory' |
  'image___localFile___dev' |
  'image___localFile___mode' |
  'image___localFile___nlink' |
  'image___localFile___uid' |
  'image___localFile___gid' |
  'image___localFile___rdev' |
  'image___localFile___ino' |
  'image___localFile___atimeMs' |
  'image___localFile___mtimeMs' |
  'image___localFile___ctimeMs' |
  'image___localFile___atime' |
  'image___localFile___mtime' |
  'image___localFile___ctime' |
  'image___localFile___birthtime' |
  'image___localFile___birthtimeMs' |
  'image___localFile___blksize' |
  'image___localFile___blocks' |
  'image___localFile___url' |
  'image___localFile___publicURL' |
  'image___localFile___childImageSharp___id' |
  'image___localFile___childImageSharp___children' |
  'image___localFile___id' |
  'image___localFile___parent___id' |
  'image___localFile___parent___children' |
  'image___localFile___children' |
  'image___localFile___children___id' |
  'image___localFile___children___children' |
  'image___localFile___internal___content' |
  'image___localFile___internal___contentDigest' |
  'image___localFile___internal___description' |
  'image___localFile___internal___fieldOwners' |
  'image___localFile___internal___ignoreType' |
  'image___localFile___internal___mediaType' |
  'image___localFile___internal___owner' |
  'image___localFile___internal___type' |
  'image___fixed___base64' |
  'image___fixed___tracedSVG' |
  'image___fixed___aspectRatio' |
  'image___fixed___width' |
  'image___fixed___height' |
  'image___fixed___src' |
  'image___fixed___srcSet' |
  'image___fixed___srcWebp' |
  'image___fixed___srcSetWebp' |
  'image___resolutions___base64' |
  'image___resolutions___tracedSVG' |
  'image___resolutions___aspectRatio' |
  'image___resolutions___width' |
  'image___resolutions___height' |
  'image___resolutions___src' |
  'image___resolutions___srcSet' |
  'image___resolutions___srcWebp' |
  'image___resolutions___srcSetWebp' |
  'image___fluid___base64' |
  'image___fluid___tracedSVG' |
  'image___fluid___aspectRatio' |
  'image___fluid___src' |
  'image___fluid___srcSet' |
  'image___fluid___srcWebp' |
  'image___fluid___srcSetWebp' |
  'image___fluid___sizes' |
  'image___sizes___base64' |
  'image___sizes___tracedSVG' |
  'image___sizes___aspectRatio' |
  'image___sizes___src' |
  'image___sizes___srcSet' |
  'image___sizes___srcWebp' |
  'image___sizes___srcSetWebp' |
  'image___sizes___sizes' |
  'image___resize___base64' |
  'image___resize___tracedSVG' |
  'image___resize___src' |
  'image___resize___width' |
  'image___resize___height' |
  'image___resize___aspectRatio' |
  'description___id' |
  'description___parent___id' |
  'description___parent___parent___id' |
  'description___parent___parent___children' |
  'description___parent___children' |
  'description___parent___children___id' |
  'description___parent___children___children' |
  'description___parent___internal___content' |
  'description___parent___internal___contentDigest' |
  'description___parent___internal___description' |
  'description___parent___internal___fieldOwners' |
  'description___parent___internal___ignoreType' |
  'description___parent___internal___mediaType' |
  'description___parent___internal___owner' |
  'description___parent___internal___type' |
  'description___children' |
  'description___children___id' |
  'description___children___parent___id' |
  'description___children___parent___children' |
  'description___children___children' |
  'description___children___children___id' |
  'description___children___children___children' |
  'description___children___internal___content' |
  'description___children___internal___contentDigest' |
  'description___children___internal___description' |
  'description___children___internal___fieldOwners' |
  'description___children___internal___ignoreType' |
  'description___children___internal___mediaType' |
  'description___children___internal___owner' |
  'description___children___internal___type' |
  'description___internal___content' |
  'description___internal___contentDigest' |
  'description___internal___description' |
  'description___internal___fieldOwners' |
  'description___internal___ignoreType' |
  'description___internal___mediaType' |
  'description___internal___owner' |
  'description___internal___type' |
  'description___description' |
  'body___id' |
  'body___parent___id' |
  'body___parent___parent___id' |
  'body___parent___parent___children' |
  'body___parent___children' |
  'body___parent___children___id' |
  'body___parent___children___children' |
  'body___parent___internal___content' |
  'body___parent___internal___contentDigest' |
  'body___parent___internal___description' |
  'body___parent___internal___fieldOwners' |
  'body___parent___internal___ignoreType' |
  'body___parent___internal___mediaType' |
  'body___parent___internal___owner' |
  'body___parent___internal___type' |
  'body___children' |
  'body___children___id' |
  'body___children___parent___id' |
  'body___children___parent___children' |
  'body___children___children' |
  'body___children___children___id' |
  'body___children___children___children' |
  'body___children___internal___content' |
  'body___children___internal___contentDigest' |
  'body___children___internal___description' |
  'body___children___internal___fieldOwners' |
  'body___children___internal___ignoreType' |
  'body___children___internal___mediaType' |
  'body___children___internal___owner' |
  'body___children___internal___type' |
  'body___internal___content' |
  'body___internal___contentDigest' |
  'body___internal___description' |
  'body___internal___fieldOwners' |
  'body___internal___ignoreType' |
  'body___internal___mediaType' |
  'body___internal___owner' |
  'body___internal___type' |
  'body___body' |
  'spaceId' |
  'contentful_id' |
  'createdAt' |
  'updatedAt' |
  'sys___revision' |
  'sys___contentType___sys___type' |
  'sys___contentType___sys___linkType' |
  'sys___contentType___sys___id' |
  'sys___contentType___sys___contentful_id' |
  'node_locale' |
  'block_featured_blog_posts' |
  'block_featured_blog_posts___id' |
  'block_featured_blog_posts___parent___id' |
  'block_featured_blog_posts___parent___parent___id' |
  'block_featured_blog_posts___parent___parent___children' |
  'block_featured_blog_posts___parent___children' |
  'block_featured_blog_posts___parent___children___id' |
  'block_featured_blog_posts___parent___children___children' |
  'block_featured_blog_posts___parent___internal___content' |
  'block_featured_blog_posts___parent___internal___contentDigest' |
  'block_featured_blog_posts___parent___internal___description' |
  'block_featured_blog_posts___parent___internal___fieldOwners' |
  'block_featured_blog_posts___parent___internal___ignoreType' |
  'block_featured_blog_posts___parent___internal___mediaType' |
  'block_featured_blog_posts___parent___internal___owner' |
  'block_featured_blog_posts___parent___internal___type' |
  'block_featured_blog_posts___children' |
  'block_featured_blog_posts___children___id' |
  'block_featured_blog_posts___children___parent___id' |
  'block_featured_blog_posts___children___parent___children' |
  'block_featured_blog_posts___children___children' |
  'block_featured_blog_posts___children___children___id' |
  'block_featured_blog_posts___children___children___children' |
  'block_featured_blog_posts___children___internal___content' |
  'block_featured_blog_posts___children___internal___contentDigest' |
  'block_featured_blog_posts___children___internal___description' |
  'block_featured_blog_posts___children___internal___fieldOwners' |
  'block_featured_blog_posts___children___internal___ignoreType' |
  'block_featured_blog_posts___children___internal___mediaType' |
  'block_featured_blog_posts___children___internal___owner' |
  'block_featured_blog_posts___children___internal___type' |
  'block_featured_blog_posts___internal___content' |
  'block_featured_blog_posts___internal___contentDigest' |
  'block_featured_blog_posts___internal___description' |
  'block_featured_blog_posts___internal___fieldOwners' |
  'block_featured_blog_posts___internal___ignoreType' |
  'block_featured_blog_posts___internal___mediaType' |
  'block_featured_blog_posts___internal___owner' |
  'block_featured_blog_posts___internal___type' |
  'block_featured_blog_posts___title' |
  'block_featured_blog_posts___blogPosts' |
  'block_featured_blog_posts___blogPosts___id' |
  'block_featured_blog_posts___blogPosts___parent___id' |
  'block_featured_blog_posts___blogPosts___parent___children' |
  'block_featured_blog_posts___blogPosts___children' |
  'block_featured_blog_posts___blogPosts___children___id' |
  'block_featured_blog_posts___blogPosts___children___children' |
  'block_featured_blog_posts___blogPosts___internal___content' |
  'block_featured_blog_posts___blogPosts___internal___contentDigest' |
  'block_featured_blog_posts___blogPosts___internal___description' |
  'block_featured_blog_posts___blogPosts___internal___fieldOwners' |
  'block_featured_blog_posts___blogPosts___internal___ignoreType' |
  'block_featured_blog_posts___blogPosts___internal___mediaType' |
  'block_featured_blog_posts___blogPosts___internal___owner' |
  'block_featured_blog_posts___blogPosts___internal___type' |
  'block_featured_blog_posts___blogPosts___title' |
  'block_featured_blog_posts___blogPosts___slug' |
  'block_featured_blog_posts___blogPosts___publishDate' |
  'block_featured_blog_posts___blogPosts___image___id' |
  'block_featured_blog_posts___blogPosts___image___children' |
  'block_featured_blog_posts___blogPosts___image___contentful_id' |
  'block_featured_blog_posts___blogPosts___image___title' |
  'block_featured_blog_posts___blogPosts___image___description' |
  'block_featured_blog_posts___blogPosts___image___node_locale' |
  'block_featured_blog_posts___blogPosts___description___id' |
  'block_featured_blog_posts___blogPosts___description___children' |
  'block_featured_blog_posts___blogPosts___description___description' |
  'block_featured_blog_posts___blogPosts___body___id' |
  'block_featured_blog_posts___blogPosts___body___children' |
  'block_featured_blog_posts___blogPosts___body___body' |
  'block_featured_blog_posts___blogPosts___spaceId' |
  'block_featured_blog_posts___blogPosts___contentful_id' |
  'block_featured_blog_posts___blogPosts___createdAt' |
  'block_featured_blog_posts___blogPosts___updatedAt' |
  'block_featured_blog_posts___blogPosts___sys___revision' |
  'block_featured_blog_posts___blogPosts___node_locale' |
  'block_featured_blog_posts___blogPosts___block_featured_blog_posts' |
  'block_featured_blog_posts___blogPosts___block_featured_blog_posts___id' |
  'block_featured_blog_posts___blogPosts___block_featured_blog_posts___children' |
  'block_featured_blog_posts___blogPosts___block_featured_blog_posts___title' |
  'block_featured_blog_posts___blogPosts___block_featured_blog_posts___blogPosts' |
  'block_featured_blog_posts___blogPosts___block_featured_blog_posts___page' |
  'block_featured_blog_posts___blogPosts___block_featured_blog_posts___spaceId' |
  'block_featured_blog_posts___blogPosts___block_featured_blog_posts___contentful_id' |
  'block_featured_blog_posts___blogPosts___block_featured_blog_posts___createdAt' |
  'block_featured_blog_posts___blogPosts___block_featured_blog_posts___updatedAt' |
  'block_featured_blog_posts___blogPosts___block_featured_blog_posts___node_locale' |
  'block_featured_blog_posts___blogPosts___childContentfulBlogPostDescriptionTextNode___id' |
  'block_featured_blog_posts___blogPosts___childContentfulBlogPostDescriptionTextNode___children' |
  'block_featured_blog_posts___blogPosts___childContentfulBlogPostDescriptionTextNode___description' |
  'block_featured_blog_posts___blogPosts___childContentfulBlogPostBodyTextNode___id' |
  'block_featured_blog_posts___blogPosts___childContentfulBlogPostBodyTextNode___children' |
  'block_featured_blog_posts___blogPosts___childContentfulBlogPostBodyTextNode___body' |
  'block_featured_blog_posts___page' |
  'block_featured_blog_posts___page___id' |
  'block_featured_blog_posts___page___parent___id' |
  'block_featured_blog_posts___page___parent___children' |
  'block_featured_blog_posts___page___children' |
  'block_featured_blog_posts___page___children___id' |
  'block_featured_blog_posts___page___children___children' |
  'block_featured_blog_posts___page___internal___content' |
  'block_featured_blog_posts___page___internal___contentDigest' |
  'block_featured_blog_posts___page___internal___description' |
  'block_featured_blog_posts___page___internal___fieldOwners' |
  'block_featured_blog_posts___page___internal___ignoreType' |
  'block_featured_blog_posts___page___internal___mediaType' |
  'block_featured_blog_posts___page___internal___owner' |
  'block_featured_blog_posts___page___internal___type' |
  'block_featured_blog_posts___page___title' |
  'block_featured_blog_posts___page___slug' |
  'block_featured_blog_posts___page___spaceId' |
  'block_featured_blog_posts___page___contentful_id' |
  'block_featured_blog_posts___page___createdAt' |
  'block_featured_blog_posts___page___updatedAt' |
  'block_featured_blog_posts___page___sys___revision' |
  'block_featured_blog_posts___page___node_locale' |
  'block_featured_blog_posts___spaceId' |
  'block_featured_blog_posts___contentful_id' |
  'block_featured_blog_posts___createdAt' |
  'block_featured_blog_posts___updatedAt' |
  'block_featured_blog_posts___sys___revision' |
  'block_featured_blog_posts___node_locale' |
  'childContentfulBlogPostDescriptionTextNode___id' |
  'childContentfulBlogPostDescriptionTextNode___parent___id' |
  'childContentfulBlogPostDescriptionTextNode___parent___parent___id' |
  'childContentfulBlogPostDescriptionTextNode___parent___parent___children' |
  'childContentfulBlogPostDescriptionTextNode___parent___children' |
  'childContentfulBlogPostDescriptionTextNode___parent___children___id' |
  'childContentfulBlogPostDescriptionTextNode___parent___children___children' |
  'childContentfulBlogPostDescriptionTextNode___parent___internal___content' |
  'childContentfulBlogPostDescriptionTextNode___parent___internal___contentDigest' |
  'childContentfulBlogPostDescriptionTextNode___parent___internal___description' |
  'childContentfulBlogPostDescriptionTextNode___parent___internal___fieldOwners' |
  'childContentfulBlogPostDescriptionTextNode___parent___internal___ignoreType' |
  'childContentfulBlogPostDescriptionTextNode___parent___internal___mediaType' |
  'childContentfulBlogPostDescriptionTextNode___parent___internal___owner' |
  'childContentfulBlogPostDescriptionTextNode___parent___internal___type' |
  'childContentfulBlogPostDescriptionTextNode___children' |
  'childContentfulBlogPostDescriptionTextNode___children___id' |
  'childContentfulBlogPostDescriptionTextNode___children___parent___id' |
  'childContentfulBlogPostDescriptionTextNode___children___parent___children' |
  'childContentfulBlogPostDescriptionTextNode___children___children' |
  'childContentfulBlogPostDescriptionTextNode___children___children___id' |
  'childContentfulBlogPostDescriptionTextNode___children___children___children' |
  'childContentfulBlogPostDescriptionTextNode___children___internal___content' |
  'childContentfulBlogPostDescriptionTextNode___children___internal___contentDigest' |
  'childContentfulBlogPostDescriptionTextNode___children___internal___description' |
  'childContentfulBlogPostDescriptionTextNode___children___internal___fieldOwners' |
  'childContentfulBlogPostDescriptionTextNode___children___internal___ignoreType' |
  'childContentfulBlogPostDescriptionTextNode___children___internal___mediaType' |
  'childContentfulBlogPostDescriptionTextNode___children___internal___owner' |
  'childContentfulBlogPostDescriptionTextNode___children___internal___type' |
  'childContentfulBlogPostDescriptionTextNode___internal___content' |
  'childContentfulBlogPostDescriptionTextNode___internal___contentDigest' |
  'childContentfulBlogPostDescriptionTextNode___internal___description' |
  'childContentfulBlogPostDescriptionTextNode___internal___fieldOwners' |
  'childContentfulBlogPostDescriptionTextNode___internal___ignoreType' |
  'childContentfulBlogPostDescriptionTextNode___internal___mediaType' |
  'childContentfulBlogPostDescriptionTextNode___internal___owner' |
  'childContentfulBlogPostDescriptionTextNode___internal___type' |
  'childContentfulBlogPostDescriptionTextNode___description' |
  'childContentfulBlogPostBodyTextNode___id' |
  'childContentfulBlogPostBodyTextNode___parent___id' |
  'childContentfulBlogPostBodyTextNode___parent___parent___id' |
  'childContentfulBlogPostBodyTextNode___parent___parent___children' |
  'childContentfulBlogPostBodyTextNode___parent___children' |
  'childContentfulBlogPostBodyTextNode___parent___children___id' |
  'childContentfulBlogPostBodyTextNode___parent___children___children' |
  'childContentfulBlogPostBodyTextNode___parent___internal___content' |
  'childContentfulBlogPostBodyTextNode___parent___internal___contentDigest' |
  'childContentfulBlogPostBodyTextNode___parent___internal___description' |
  'childContentfulBlogPostBodyTextNode___parent___internal___fieldOwners' |
  'childContentfulBlogPostBodyTextNode___parent___internal___ignoreType' |
  'childContentfulBlogPostBodyTextNode___parent___internal___mediaType' |
  'childContentfulBlogPostBodyTextNode___parent___internal___owner' |
  'childContentfulBlogPostBodyTextNode___parent___internal___type' |
  'childContentfulBlogPostBodyTextNode___children' |
  'childContentfulBlogPostBodyTextNode___children___id' |
  'childContentfulBlogPostBodyTextNode___children___parent___id' |
  'childContentfulBlogPostBodyTextNode___children___parent___children' |
  'childContentfulBlogPostBodyTextNode___children___children' |
  'childContentfulBlogPostBodyTextNode___children___children___id' |
  'childContentfulBlogPostBodyTextNode___children___children___children' |
  'childContentfulBlogPostBodyTextNode___children___internal___content' |
  'childContentfulBlogPostBodyTextNode___children___internal___contentDigest' |
  'childContentfulBlogPostBodyTextNode___children___internal___description' |
  'childContentfulBlogPostBodyTextNode___children___internal___fieldOwners' |
  'childContentfulBlogPostBodyTextNode___children___internal___ignoreType' |
  'childContentfulBlogPostBodyTextNode___children___internal___mediaType' |
  'childContentfulBlogPostBodyTextNode___children___internal___owner' |
  'childContentfulBlogPostBodyTextNode___children___internal___type' |
  'childContentfulBlogPostBodyTextNode___internal___content' |
  'childContentfulBlogPostBodyTextNode___internal___contentDigest' |
  'childContentfulBlogPostBodyTextNode___internal___description' |
  'childContentfulBlogPostBodyTextNode___internal___fieldOwners' |
  'childContentfulBlogPostBodyTextNode___internal___ignoreType' |
  'childContentfulBlogPostBodyTextNode___internal___mediaType' |
  'childContentfulBlogPostBodyTextNode___internal___owner' |
  'childContentfulBlogPostBodyTextNode___internal___type' |
  'childContentfulBlogPostBodyTextNode___body';

export type ContentfulBlogPostFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  publishDate?: Maybe<DateQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFilterInput>;
  description?: Maybe<ContentfulBlogPostDescriptionTextNodeFilterInput>;
  body?: Maybe<ContentfulBlogPostBodyTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlogPostSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  block_featured_blog_posts?: Maybe<ContentfulBlockFeaturedBlogPostsFilterListInput>;
  childContentfulBlogPostDescriptionTextNode?: Maybe<ContentfulBlogPostDescriptionTextNodeFilterInput>;
  childContentfulBlogPostBodyTextNode?: Maybe<ContentfulBlogPostBodyTextNodeFilterInput>;
};

export type ContentfulBlogPostFilterListInput = {
  elemMatch?: Maybe<ContentfulBlogPostFilterInput>;
};

export type ContentfulBlogPostGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBlogPostEdge>;
  nodes: Array<ContentfulBlogPost>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBlogPostFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBlogPostSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulBlogPostSysContentType>;
};

export type ContentfulBlogPostSysContentType = {
  sys?: Maybe<ContentfulBlogPostSysContentTypeSys>;
};

export type ContentfulBlogPostSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulBlogPostSysContentTypeSysFilterInput>;
};

export type ContentfulBlogPostSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulBlogPostSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBlogPostSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulBlogPostSysContentTypeFilterInput>;
};

export type ContentfulContentType = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  displayField?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulContentTypeGroupConnection>;
};


export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeEdge = {
  next?: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous?: Maybe<ContentfulContentType>;
};

export type ContentfulContentTypeFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'name' |
  'displayField' |
  'description';

export type ContentfulContentTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulContentTypeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulImageCropFocus = 
  'TOP' |
  'TOP_LEFT' |
  'TOP_RIGHT' |
  'BOTTOM' |
  'BOTTOM_RIGHT' |
  'BOTTOM_LEFT' |
  'RIGHT' |
  'LEFT' |
  'FACE' |
  'FACES' |
  'CENTER';

export type ContentfulImageFormat = 
  'NO_CHANGE' |
  'JPG' |
  'PNG' |
  'WEBP';

export type ContentfulPage = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  blocks?: Maybe<Array<Maybe<ContentfulBlockFeaturedBlogPostsContentfulBlockFeaturedProductsContentfulBlockFormContentfulBlockHeroUnion>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulPageSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulPageCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulPageUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulPageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPageEdge>;
  nodes: Array<ContentfulPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPageGroupConnection>;
};


export type ContentfulPageConnectionDistinctArgs = {
  field: ContentfulPageFieldsEnum;
};


export type ContentfulPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPageFieldsEnum;
};

export type ContentfulPageEdge = {
  next?: Maybe<ContentfulPage>;
  node: ContentfulPage;
  previous?: Maybe<ContentfulPage>;
};

export type ContentfulPageFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'title' |
  'slug' |
  'spaceId' |
  'contentful_id' |
  'createdAt' |
  'updatedAt' |
  'sys___revision' |
  'sys___contentType___sys___type' |
  'sys___contentType___sys___linkType' |
  'sys___contentType___sys___id' |
  'sys___contentType___sys___contentful_id' |
  'node_locale';

export type ContentfulPageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPageSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPageFilterListInput = {
  elemMatch?: Maybe<ContentfulPageFilterInput>;
};

export type ContentfulPageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPageEdge>;
  nodes: Array<ContentfulPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPageSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPageSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulPageSysContentType>;
};

export type ContentfulPageSysContentType = {
  sys?: Maybe<ContentfulPageSysContentTypeSys>;
};

export type ContentfulPageSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulPageSysContentTypeSysFilterInput>;
};

export type ContentfulPageSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulPageSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPageSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulPageSysContentTypeFilterInput>;
};

export type ContentfulResize = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type ContentfulResizeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type ContentfulResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum = 
  'sourceInstanceName' |
  'absolutePath' |
  'relativePath' |
  'extension' |
  'size' |
  'prettySize' |
  'modifiedTime' |
  'accessTime' |
  'changeTime' |
  'birthTime' |
  'root' |
  'dir' |
  'base' |
  'ext' |
  'name' |
  'relativeDirectory' |
  'dev' |
  'mode' |
  'nlink' |
  'uid' |
  'gid' |
  'rdev' |
  'ino' |
  'atimeMs' |
  'mtimeMs' |
  'ctimeMs' |
  'atime' |
  'mtime' |
  'ctime' |
  'birthtime' |
  'birthtimeMs' |
  'blksize' |
  'blocks' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum = 
  'sourceInstanceName' |
  'absolutePath' |
  'relativePath' |
  'extension' |
  'size' |
  'prettySize' |
  'modifiedTime' |
  'accessTime' |
  'changeTime' |
  'birthTime' |
  'root' |
  'dir' |
  'base' |
  'ext' |
  'name' |
  'relativeDirectory' |
  'dev' |
  'mode' |
  'nlink' |
  'uid' |
  'gid' |
  'rdev' |
  'ino' |
  'atimeMs' |
  'mtimeMs' |
  'ctimeMs' |
  'atime' |
  'mtime' |
  'ctime' |
  'birthtime' |
  'birthtimeMs' |
  'blksize' |
  'blocks' |
  'url' |
  'publicURL' |
  'childImageSharp___fixed___base64' |
  'childImageSharp___fixed___tracedSVG' |
  'childImageSharp___fixed___aspectRatio' |
  'childImageSharp___fixed___width' |
  'childImageSharp___fixed___height' |
  'childImageSharp___fixed___src' |
  'childImageSharp___fixed___srcSet' |
  'childImageSharp___fixed___srcWebp' |
  'childImageSharp___fixed___srcSetWebp' |
  'childImageSharp___fixed___originalName' |
  'childImageSharp___resolutions___base64' |
  'childImageSharp___resolutions___tracedSVG' |
  'childImageSharp___resolutions___aspectRatio' |
  'childImageSharp___resolutions___width' |
  'childImageSharp___resolutions___height' |
  'childImageSharp___resolutions___src' |
  'childImageSharp___resolutions___srcSet' |
  'childImageSharp___resolutions___srcWebp' |
  'childImageSharp___resolutions___srcSetWebp' |
  'childImageSharp___resolutions___originalName' |
  'childImageSharp___fluid___base64' |
  'childImageSharp___fluid___tracedSVG' |
  'childImageSharp___fluid___aspectRatio' |
  'childImageSharp___fluid___src' |
  'childImageSharp___fluid___srcSet' |
  'childImageSharp___fluid___srcWebp' |
  'childImageSharp___fluid___srcSetWebp' |
  'childImageSharp___fluid___sizes' |
  'childImageSharp___fluid___originalImg' |
  'childImageSharp___fluid___originalName' |
  'childImageSharp___fluid___presentationWidth' |
  'childImageSharp___fluid___presentationHeight' |
  'childImageSharp___sizes___base64' |
  'childImageSharp___sizes___tracedSVG' |
  'childImageSharp___sizes___aspectRatio' |
  'childImageSharp___sizes___src' |
  'childImageSharp___sizes___srcSet' |
  'childImageSharp___sizes___srcWebp' |
  'childImageSharp___sizes___srcSetWebp' |
  'childImageSharp___sizes___sizes' |
  'childImageSharp___sizes___originalImg' |
  'childImageSharp___sizes___originalName' |
  'childImageSharp___sizes___presentationWidth' |
  'childImageSharp___sizes___presentationHeight' |
  'childImageSharp___original___width' |
  'childImageSharp___original___height' |
  'childImageSharp___original___src' |
  'childImageSharp___resize___src' |
  'childImageSharp___resize___tracedSVG' |
  'childImageSharp___resize___width' |
  'childImageSharp___resize___height' |
  'childImageSharp___resize___aspectRatio' |
  'childImageSharp___resize___originalName' |
  'childImageSharp___id' |
  'childImageSharp___parent___id' |
  'childImageSharp___parent___parent___id' |
  'childImageSharp___parent___parent___children' |
  'childImageSharp___parent___children' |
  'childImageSharp___parent___children___id' |
  'childImageSharp___parent___children___children' |
  'childImageSharp___parent___internal___content' |
  'childImageSharp___parent___internal___contentDigest' |
  'childImageSharp___parent___internal___description' |
  'childImageSharp___parent___internal___fieldOwners' |
  'childImageSharp___parent___internal___ignoreType' |
  'childImageSharp___parent___internal___mediaType' |
  'childImageSharp___parent___internal___owner' |
  'childImageSharp___parent___internal___type' |
  'childImageSharp___children' |
  'childImageSharp___children___id' |
  'childImageSharp___children___parent___id' |
  'childImageSharp___children___parent___children' |
  'childImageSharp___children___children' |
  'childImageSharp___children___children___id' |
  'childImageSharp___children___children___children' |
  'childImageSharp___children___internal___content' |
  'childImageSharp___children___internal___contentDigest' |
  'childImageSharp___children___internal___description' |
  'childImageSharp___children___internal___fieldOwners' |
  'childImageSharp___children___internal___ignoreType' |
  'childImageSharp___children___internal___mediaType' |
  'childImageSharp___children___internal___owner' |
  'childImageSharp___children___internal___type' |
  'childImageSharp___internal___content' |
  'childImageSharp___internal___contentDigest' |
  'childImageSharp___internal___description' |
  'childImageSharp___internal___fieldOwners' |
  'childImageSharp___internal___ignoreType' |
  'childImageSharp___internal___mediaType' |
  'childImageSharp___internal___owner' |
  'childImageSharp___internal___type' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ImageCropFocus = 
  'CENTER' |
  'NORTH' |
  'NORTHEAST' |
  'EAST' |
  'SOUTHEAST' |
  'SOUTH' |
  'SOUTHWEST' |
  'WEST' |
  'NORTHWEST' |
  'ENTROPY' |
  'ATTENTION';

export type ImageFit = 
  'COVER' |
  'CONTAIN' |
  'FILL' |
  'INSIDE' |
  'OUTSIDE';

export type ImageFormat = 
  'NO_CHANGE' |
  'JPG' |
  'PNG' |
  'WEBP';

export type ImageResizingBehavior = 
  'NO_CHANGE' |
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  'PAD' |
  /** Crop a part of the original image to match the specified size. */
  'CROP' |
  /**
   * Crop the image to the specified dimensions, if the original image is smaller
   * than these dimensions, then the image will be upscaled.
   */
  'FILL' |
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  'THUMB' |
  /** Scale the image regardless of the original aspect ratio. */
  'SCALE';

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum = 
  'fixed___base64' |
  'fixed___tracedSVG' |
  'fixed___aspectRatio' |
  'fixed___width' |
  'fixed___height' |
  'fixed___src' |
  'fixed___srcSet' |
  'fixed___srcWebp' |
  'fixed___srcSetWebp' |
  'fixed___originalName' |
  'resolutions___base64' |
  'resolutions___tracedSVG' |
  'resolutions___aspectRatio' |
  'resolutions___width' |
  'resolutions___height' |
  'resolutions___src' |
  'resolutions___srcSet' |
  'resolutions___srcWebp' |
  'resolutions___srcSetWebp' |
  'resolutions___originalName' |
  'fluid___base64' |
  'fluid___tracedSVG' |
  'fluid___aspectRatio' |
  'fluid___src' |
  'fluid___srcSet' |
  'fluid___srcWebp' |
  'fluid___srcSetWebp' |
  'fluid___sizes' |
  'fluid___originalImg' |
  'fluid___originalName' |
  'fluid___presentationWidth' |
  'fluid___presentationHeight' |
  'sizes___base64' |
  'sizes___tracedSVG' |
  'sizes___aspectRatio' |
  'sizes___src' |
  'sizes___srcSet' |
  'sizes___srcWebp' |
  'sizes___srcSetWebp' |
  'sizes___sizes' |
  'sizes___originalImg' |
  'sizes___originalName' |
  'sizes___presentationWidth' |
  'sizes___presentationHeight' |
  'original___width' |
  'original___height' |
  'original___src' |
  'resize___src' |
  'resize___tracedSVG' |
  'resize___width' |
  'resize___height' |
  'resize___aspectRatio' |
  'resize___originalName' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth?: Maybe<Scalars['Int']>;
  presentationHeight?: Maybe<Scalars['Int']>;
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth?: Maybe<Scalars['Int']>;
  presentationHeight?: Maybe<Scalars['Int']>;
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type PotraceTurnPolicy = 
  'TURNPOLICY_BLACK' |
  'TURNPOLICY_WHITE' |
  'TURNPOLICY_LEFT' |
  'TURNPOLICY_RIGHT' |
  'TURNPOLICY_MINORITY' |
  'TURNPOLICY_MAJORITY';

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  shopifyProductMetafield?: Maybe<ShopifyProductMetafield>;
  allShopifyProductMetafield: ShopifyProductMetafieldConnection;
  shopifyProductOption?: Maybe<ShopifyProductOption>;
  allShopifyProductOption: ShopifyProductOptionConnection;
  shopifyProductVariant?: Maybe<ShopifyProductVariant>;
  allShopifyProductVariant: ShopifyProductVariantConnection;
  shopifyProduct?: Maybe<ShopifyProduct>;
  allShopifyProduct: ShopifyProductConnection;
  shopifyBlog?: Maybe<ShopifyBlog>;
  allShopifyBlog: ShopifyBlogConnection;
  shopifyCollection?: Maybe<ShopifyCollection>;
  allShopifyCollection: ShopifyCollectionConnection;
  shopifyPage?: Maybe<ShopifyPage>;
  allShopifyPage: ShopifyPageConnection;
  contentfulAsset?: Maybe<ContentfulAsset>;
  allContentfulAsset: ContentfulAssetConnection;
  contentfulBlockFormDescriptionTextNode?: Maybe<ContentfulBlockFormDescriptionTextNode>;
  allContentfulBlockFormDescriptionTextNode: ContentfulBlockFormDescriptionTextNodeConnection;
  contentfulBlockFormExtraDescriptionTextNode?: Maybe<ContentfulBlockFormExtraDescriptionTextNode>;
  allContentfulBlockFormExtraDescriptionTextNode: ContentfulBlockFormExtraDescriptionTextNodeConnection;
  contentfulBlockFormSuccessDescriptionTextNode?: Maybe<ContentfulBlockFormSuccessDescriptionTextNode>;
  allContentfulBlockFormSuccessDescriptionTextNode: ContentfulBlockFormSuccessDescriptionTextNodeConnection;
  contentfulBlockForm?: Maybe<ContentfulBlockForm>;
  allContentfulBlockForm: ContentfulBlockFormConnection;
  contentfulBlockFeaturedProducts?: Maybe<ContentfulBlockFeaturedProducts>;
  allContentfulBlockFeaturedProducts: ContentfulBlockFeaturedProductsConnection;
  contentfulBlockFeaturedBlogPosts?: Maybe<ContentfulBlockFeaturedBlogPosts>;
  allContentfulBlockFeaturedBlogPosts: ContentfulBlockFeaturedBlogPostsConnection;
  contentfulBlockHeroPictureTextTextNode?: Maybe<ContentfulBlockHeroPictureTextTextNode>;
  allContentfulBlockHeroPictureTextTextNode: ContentfulBlockHeroPictureTextTextNodeConnection;
  contentfulBlockHero?: Maybe<ContentfulBlockHero>;
  allContentfulBlockHero: ContentfulBlockHeroConnection;
  contentfulPage?: Maybe<ContentfulPage>;
  allContentfulPage: ContentfulPageConnection;
  contentfulBlogPostBodyTextNode?: Maybe<ContentfulBlogPostBodyTextNode>;
  allContentfulBlogPostBodyTextNode: ContentfulBlogPostBodyTextNodeConnection;
  contentfulBlogPostDescriptionTextNode?: Maybe<ContentfulBlogPostDescriptionTextNode>;
  allContentfulBlogPostDescriptionTextNode: ContentfulBlogPostDescriptionTextNodeConnection;
  contentfulBlogPost?: Maybe<ContentfulBlogPost>;
  allContentfulBlogPost: ContentfulBlogPostConnection;
  contentfulContentType?: Maybe<ContentfulContentType>;
  allContentfulContentType: ContentfulContentTypeConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryShopifyProductMetafieldArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  key?: Maybe<StringQueryOperatorInput>;
  namespace?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  valueType?: Maybe<StringQueryOperatorInput>;
  shopifyId?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllShopifyProductMetafieldArgs = {
  filter?: Maybe<ShopifyProductMetafieldFilterInput>;
  sort?: Maybe<ShopifyProductMetafieldSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryShopifyProductOptionArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  values?: Maybe<StringQueryOperatorInput>;
  shopifyId?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllShopifyProductOptionArgs = {
  filter?: Maybe<ShopifyProductOptionFilterInput>;
  sort?: Maybe<ShopifyProductOptionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryShopifyProductVariantArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  availableForSale?: Maybe<BooleanQueryOperatorInput>;
  image?: Maybe<ShopifyProductVariantImageFilterInput>;
  price?: Maybe<StringQueryOperatorInput>;
  priceV2?: Maybe<ShopifyProductVariantPriceV2FilterInput>;
  requiresShipping?: Maybe<BooleanQueryOperatorInput>;
  selectedOptions?: Maybe<ShopifyProductVariantSelectedOptionsFilterListInput>;
  sku?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  weight?: Maybe<IntQueryOperatorInput>;
  weightUnit?: Maybe<StringQueryOperatorInput>;
  presentmentPrices?: Maybe<ShopifyProductVariantPresentmentPricesFilterInput>;
  shopifyId?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllShopifyProductVariantArgs = {
  filter?: Maybe<ShopifyProductVariantFilterInput>;
  sort?: Maybe<ShopifyProductVariantSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryShopifyProductArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  availableForSale?: Maybe<BooleanQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  descriptionHtml?: Maybe<StringQueryOperatorInput>;
  handle?: Maybe<StringQueryOperatorInput>;
  images?: Maybe<ShopifyProductImagesFilterListInput>;
  onlineStoreUrl?: Maybe<StringQueryOperatorInput>;
  priceRange?: Maybe<ShopifyProductPriceRangeFilterInput>;
  productType?: Maybe<StringQueryOperatorInput>;
  publishedAt?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  vendor?: Maybe<StringQueryOperatorInput>;
  shopifyId?: Maybe<StringQueryOperatorInput>;
  variants?: Maybe<ShopifyProductVariantFilterListInput>;
  metafields?: Maybe<ShopifyProductMetafieldFilterListInput>;
  options?: Maybe<ShopifyProductOptionFilterListInput>;
};


export type QueryAllShopifyProductArgs = {
  filter?: Maybe<ShopifyProductFilterInput>;
  sort?: Maybe<ShopifyProductSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryShopifyBlogArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  shopifyId?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllShopifyBlogArgs = {
  filter?: Maybe<ShopifyBlogFilterInput>;
  sort?: Maybe<ShopifyBlogSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryShopifyCollectionArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
  descriptionHtml?: Maybe<StringQueryOperatorInput>;
  handle?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  shopifyId?: Maybe<StringQueryOperatorInput>;
  products?: Maybe<ShopifyProductFilterListInput>;
};


export type QueryAllShopifyCollectionArgs = {
  filter?: Maybe<ShopifyCollectionFilterInput>;
  sort?: Maybe<ShopifyCollectionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryShopifyPageArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  handle?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  bodySummary?: Maybe<StringQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  shopifyId?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllShopifyPageArgs = {
  filter?: Maybe<ShopifyPageFilterInput>;
  sort?: Maybe<ShopifyPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAssetArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  localFile?: Maybe<FileFilterInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
};


export type QueryAllContentfulAssetArgs = {
  filter?: Maybe<ContentfulAssetFilterInput>;
  sort?: Maybe<ContentfulAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlockFormDescriptionTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulBlockFormDescriptionTextNodeArgs = {
  filter?: Maybe<ContentfulBlockFormDescriptionTextNodeFilterInput>;
  sort?: Maybe<ContentfulBlockFormDescriptionTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlockFormExtraDescriptionTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  extraDescription?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulBlockFormExtraDescriptionTextNodeArgs = {
  filter?: Maybe<ContentfulBlockFormExtraDescriptionTextNodeFilterInput>;
  sort?: Maybe<ContentfulBlockFormExtraDescriptionTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlockFormSuccessDescriptionTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  successDescription?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulBlockFormSuccessDescriptionTextNodeArgs = {
  filter?: Maybe<ContentfulBlockFormSuccessDescriptionTextNodeFilterInput>;
  sort?: Maybe<ContentfulBlockFormSuccessDescriptionTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlockFormArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  sendToMailchimp?: Maybe<BooleanQueryOperatorInput>;
  sendToNetlifyForms?: Maybe<BooleanQueryOperatorInput>;
  successTitle?: Maybe<StringQueryOperatorInput>;
  extraTitle?: Maybe<StringQueryOperatorInput>;
  contentfulfields?: Maybe<StringQueryOperatorInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
  successDescription?: Maybe<ContentfulBlockFormSuccessDescriptionTextNodeFilterInput>;
  extraDescription?: Maybe<ContentfulBlockFormExtraDescriptionTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlockFormSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<ContentfulBlockFormDescriptionTextNodeFilterInput>;
  childContentfulBlockFormSuccessDescriptionTextNode?: Maybe<ContentfulBlockFormSuccessDescriptionTextNodeFilterInput>;
  childContentfulBlockFormExtraDescriptionTextNode?: Maybe<ContentfulBlockFormExtraDescriptionTextNodeFilterInput>;
  childContentfulBlockFormDescriptionTextNode?: Maybe<ContentfulBlockFormDescriptionTextNodeFilterInput>;
};


export type QueryAllContentfulBlockFormArgs = {
  filter?: Maybe<ContentfulBlockFormFilterInput>;
  sort?: Maybe<ContentfulBlockFormSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlockFeaturedProductsArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  products?: Maybe<StringQueryOperatorInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlockFeaturedProductsSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulBlockFeaturedProductsArgs = {
  filter?: Maybe<ContentfulBlockFeaturedProductsFilterInput>;
  sort?: Maybe<ContentfulBlockFeaturedProductsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlockFeaturedBlogPostsArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  blogPosts?: Maybe<ContentfulBlogPostFilterListInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlockFeaturedBlogPostsSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulBlockFeaturedBlogPostsArgs = {
  filter?: Maybe<ContentfulBlockFeaturedBlogPostsFilterInput>;
  sort?: Maybe<ContentfulBlockFeaturedBlogPostsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlockHeroPictureTextTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  pictureText?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulBlockHeroPictureTextTextNodeArgs = {
  filter?: Maybe<ContentfulBlockHeroPictureTextTextNodeFilterInput>;
  sort?: Maybe<ContentfulBlockHeroPictureTextTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlockHeroArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  picture?: Maybe<ContentfulAssetFilterInput>;
  page?: Maybe<ContentfulPageFilterListInput>;
  pictureText?: Maybe<ContentfulBlockHeroPictureTextTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlockHeroSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  childContentfulBlockHeroPictureTextTextNode?: Maybe<ContentfulBlockHeroPictureTextTextNodeFilterInput>;
};


export type QueryAllContentfulBlockHeroArgs = {
  filter?: Maybe<ContentfulBlockHeroFilterInput>;
  sort?: Maybe<ContentfulBlockHeroSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPageArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPageSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulPageArgs = {
  filter?: Maybe<ContentfulPageFilterInput>;
  sort?: Maybe<ContentfulPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlogPostBodyTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  body?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulBlogPostBodyTextNodeArgs = {
  filter?: Maybe<ContentfulBlogPostBodyTextNodeFilterInput>;
  sort?: Maybe<ContentfulBlogPostBodyTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlogPostDescriptionTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulBlogPostDescriptionTextNodeArgs = {
  filter?: Maybe<ContentfulBlogPostDescriptionTextNodeFilterInput>;
  sort?: Maybe<ContentfulBlogPostDescriptionTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBlogPostArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  publishDate?: Maybe<DateQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFilterInput>;
  description?: Maybe<ContentfulBlogPostDescriptionTextNodeFilterInput>;
  body?: Maybe<ContentfulBlogPostBodyTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBlogPostSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  block_featured_blog_posts?: Maybe<ContentfulBlockFeaturedBlogPostsFilterListInput>;
  childContentfulBlogPostDescriptionTextNode?: Maybe<ContentfulBlogPostDescriptionTextNodeFilterInput>;
  childContentfulBlogPostBodyTextNode?: Maybe<ContentfulBlogPostBodyTextNodeFilterInput>;
};


export type QueryAllContentfulBlogPostArgs = {
  filter?: Maybe<ContentfulBlogPostFilterInput>;
  sort?: Maybe<ContentfulBlogPostSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulContentTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulContentTypeArgs = {
  filter?: Maybe<ContentfulContentTypeFilterInput>;
  sort?: Maybe<ContentfulContentTypeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type ShopifyBlog = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  shopifyId?: Maybe<Scalars['String']>;
};

export type ShopifyBlogConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyBlogEdge>;
  nodes: Array<ShopifyBlog>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ShopifyBlogGroupConnection>;
};


export type ShopifyBlogConnectionDistinctArgs = {
  field: ShopifyBlogFieldsEnum;
};


export type ShopifyBlogConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ShopifyBlogFieldsEnum;
};

export type ShopifyBlogEdge = {
  next?: Maybe<ShopifyBlog>;
  node: ShopifyBlog;
  previous?: Maybe<ShopifyBlog>;
};

export type ShopifyBlogFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'title' |
  'url' |
  'shopifyId';

export type ShopifyBlogFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  shopifyId?: Maybe<StringQueryOperatorInput>;
};

export type ShopifyBlogGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyBlogEdge>;
  nodes: Array<ShopifyBlog>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ShopifyBlogSortInput = {
  fields?: Maybe<Array<Maybe<ShopifyBlogFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ShopifyCollection = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  description?: Maybe<Scalars['String']>;
  descriptionHtml?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  shopifyId?: Maybe<Scalars['String']>;
  products?: Maybe<Array<Maybe<ShopifyProduct>>>;
};


export type ShopifyCollectionUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ShopifyCollectionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyCollectionEdge>;
  nodes: Array<ShopifyCollection>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ShopifyCollectionGroupConnection>;
};


export type ShopifyCollectionConnectionDistinctArgs = {
  field: ShopifyCollectionFieldsEnum;
};


export type ShopifyCollectionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ShopifyCollectionFieldsEnum;
};

export type ShopifyCollectionEdge = {
  next?: Maybe<ShopifyCollection>;
  node: ShopifyCollection;
  previous?: Maybe<ShopifyCollection>;
};

export type ShopifyCollectionFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'description' |
  'descriptionHtml' |
  'handle' |
  'title' |
  'updatedAt' |
  'shopifyId' |
  'products' |
  'products___id' |
  'products___parent___id' |
  'products___parent___parent___id' |
  'products___parent___parent___children' |
  'products___parent___children' |
  'products___parent___children___id' |
  'products___parent___children___children' |
  'products___parent___internal___content' |
  'products___parent___internal___contentDigest' |
  'products___parent___internal___description' |
  'products___parent___internal___fieldOwners' |
  'products___parent___internal___ignoreType' |
  'products___parent___internal___mediaType' |
  'products___parent___internal___owner' |
  'products___parent___internal___type' |
  'products___children' |
  'products___children___id' |
  'products___children___parent___id' |
  'products___children___parent___children' |
  'products___children___children' |
  'products___children___children___id' |
  'products___children___children___children' |
  'products___children___internal___content' |
  'products___children___internal___contentDigest' |
  'products___children___internal___description' |
  'products___children___internal___fieldOwners' |
  'products___children___internal___ignoreType' |
  'products___children___internal___mediaType' |
  'products___children___internal___owner' |
  'products___children___internal___type' |
  'products___internal___content' |
  'products___internal___contentDigest' |
  'products___internal___description' |
  'products___internal___fieldOwners' |
  'products___internal___ignoreType' |
  'products___internal___mediaType' |
  'products___internal___owner' |
  'products___internal___type' |
  'products___availableForSale' |
  'products___createdAt' |
  'products___description' |
  'products___descriptionHtml' |
  'products___handle' |
  'products___images' |
  'products___images___id' |
  'products___images___originalSrc' |
  'products___images___localFile___sourceInstanceName' |
  'products___images___localFile___absolutePath' |
  'products___images___localFile___relativePath' |
  'products___images___localFile___extension' |
  'products___images___localFile___size' |
  'products___images___localFile___prettySize' |
  'products___images___localFile___modifiedTime' |
  'products___images___localFile___accessTime' |
  'products___images___localFile___changeTime' |
  'products___images___localFile___birthTime' |
  'products___images___localFile___root' |
  'products___images___localFile___dir' |
  'products___images___localFile___base' |
  'products___images___localFile___ext' |
  'products___images___localFile___name' |
  'products___images___localFile___relativeDirectory' |
  'products___images___localFile___dev' |
  'products___images___localFile___mode' |
  'products___images___localFile___nlink' |
  'products___images___localFile___uid' |
  'products___images___localFile___gid' |
  'products___images___localFile___rdev' |
  'products___images___localFile___ino' |
  'products___images___localFile___atimeMs' |
  'products___images___localFile___mtimeMs' |
  'products___images___localFile___ctimeMs' |
  'products___images___localFile___atime' |
  'products___images___localFile___mtime' |
  'products___images___localFile___ctime' |
  'products___images___localFile___birthtime' |
  'products___images___localFile___birthtimeMs' |
  'products___images___localFile___blksize' |
  'products___images___localFile___blocks' |
  'products___images___localFile___url' |
  'products___images___localFile___publicURL' |
  'products___images___localFile___id' |
  'products___images___localFile___children' |
  'products___onlineStoreUrl' |
  'products___priceRange___minVariantPrice___amount' |
  'products___priceRange___minVariantPrice___currencyCode' |
  'products___priceRange___maxVariantPrice___amount' |
  'products___priceRange___maxVariantPrice___currencyCode' |
  'products___productType' |
  'products___publishedAt' |
  'products___tags' |
  'products___title' |
  'products___updatedAt' |
  'products___vendor' |
  'products___shopifyId' |
  'products___variants' |
  'products___variants___id' |
  'products___variants___parent___id' |
  'products___variants___parent___children' |
  'products___variants___children' |
  'products___variants___children___id' |
  'products___variants___children___children' |
  'products___variants___internal___content' |
  'products___variants___internal___contentDigest' |
  'products___variants___internal___description' |
  'products___variants___internal___fieldOwners' |
  'products___variants___internal___ignoreType' |
  'products___variants___internal___mediaType' |
  'products___variants___internal___owner' |
  'products___variants___internal___type' |
  'products___variants___availableForSale' |
  'products___variants___image___id' |
  'products___variants___image___originalSrc' |
  'products___variants___price' |
  'products___variants___priceV2___amount' |
  'products___variants___priceV2___currencyCode' |
  'products___variants___requiresShipping' |
  'products___variants___selectedOptions' |
  'products___variants___selectedOptions___name' |
  'products___variants___selectedOptions___value' |
  'products___variants___sku' |
  'products___variants___title' |
  'products___variants___weight' |
  'products___variants___weightUnit' |
  'products___variants___presentmentPrices___edges' |
  'products___variants___shopifyId' |
  'products___metafields' |
  'products___metafields___id' |
  'products___metafields___parent___id' |
  'products___metafields___parent___children' |
  'products___metafields___children' |
  'products___metafields___children___id' |
  'products___metafields___children___children' |
  'products___metafields___internal___content' |
  'products___metafields___internal___contentDigest' |
  'products___metafields___internal___description' |
  'products___metafields___internal___fieldOwners' |
  'products___metafields___internal___ignoreType' |
  'products___metafields___internal___mediaType' |
  'products___metafields___internal___owner' |
  'products___metafields___internal___type' |
  'products___metafields___key' |
  'products___metafields___namespace' |
  'products___metafields___value' |
  'products___metafields___valueType' |
  'products___metafields___shopifyId' |
  'products___options' |
  'products___options___id' |
  'products___options___parent___id' |
  'products___options___parent___children' |
  'products___options___children' |
  'products___options___children___id' |
  'products___options___children___children' |
  'products___options___internal___content' |
  'products___options___internal___contentDigest' |
  'products___options___internal___description' |
  'products___options___internal___fieldOwners' |
  'products___options___internal___ignoreType' |
  'products___options___internal___mediaType' |
  'products___options___internal___owner' |
  'products___options___internal___type' |
  'products___options___name' |
  'products___options___values' |
  'products___options___shopifyId';

export type ShopifyCollectionFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
  descriptionHtml?: Maybe<StringQueryOperatorInput>;
  handle?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  shopifyId?: Maybe<StringQueryOperatorInput>;
  products?: Maybe<ShopifyProductFilterListInput>;
};

export type ShopifyCollectionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyCollectionEdge>;
  nodes: Array<ShopifyCollection>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ShopifyCollectionSortInput = {
  fields?: Maybe<Array<Maybe<ShopifyCollectionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ShopifyPage = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  handle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  bodySummary?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  url?: Maybe<Scalars['String']>;
  shopifyId?: Maybe<Scalars['String']>;
};


export type ShopifyPageUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ShopifyPageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyPageEdge>;
  nodes: Array<ShopifyPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ShopifyPageGroupConnection>;
};


export type ShopifyPageConnectionDistinctArgs = {
  field: ShopifyPageFieldsEnum;
};


export type ShopifyPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ShopifyPageFieldsEnum;
};

export type ShopifyPageEdge = {
  next?: Maybe<ShopifyPage>;
  node: ShopifyPage;
  previous?: Maybe<ShopifyPage>;
};

export type ShopifyPageFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'handle' |
  'title' |
  'body' |
  'bodySummary' |
  'updatedAt' |
  'url' |
  'shopifyId';

export type ShopifyPageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  handle?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  bodySummary?: Maybe<StringQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  shopifyId?: Maybe<StringQueryOperatorInput>;
};

export type ShopifyPageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyPageEdge>;
  nodes: Array<ShopifyPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ShopifyPageSortInput = {
  fields?: Maybe<Array<Maybe<ShopifyPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ShopifyProduct = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  availableForSale?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  descriptionHtml?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<ShopifyProductImages>>>;
  onlineStoreUrl?: Maybe<Scalars['String']>;
  priceRange?: Maybe<ShopifyProductPriceRange>;
  productType?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['Date']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  vendor?: Maybe<Scalars['String']>;
  shopifyId?: Maybe<Scalars['String']>;
  variants?: Maybe<Array<Maybe<ShopifyProductVariant>>>;
  metafields?: Maybe<Array<Maybe<ShopifyProductMetafield>>>;
  options?: Maybe<Array<Maybe<ShopifyProductOption>>>;
};


export type ShopifyProductCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ShopifyProductPublishedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ShopifyProductUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ShopifyProductConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyProductEdge>;
  nodes: Array<ShopifyProduct>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ShopifyProductGroupConnection>;
};


export type ShopifyProductConnectionDistinctArgs = {
  field: ShopifyProductFieldsEnum;
};


export type ShopifyProductConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ShopifyProductFieldsEnum;
};

export type ShopifyProductEdge = {
  next?: Maybe<ShopifyProduct>;
  node: ShopifyProduct;
  previous?: Maybe<ShopifyProduct>;
};

export type ShopifyProductFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'availableForSale' |
  'createdAt' |
  'description' |
  'descriptionHtml' |
  'handle' |
  'images' |
  'images___id' |
  'images___originalSrc' |
  'images___localFile___sourceInstanceName' |
  'images___localFile___absolutePath' |
  'images___localFile___relativePath' |
  'images___localFile___extension' |
  'images___localFile___size' |
  'images___localFile___prettySize' |
  'images___localFile___modifiedTime' |
  'images___localFile___accessTime' |
  'images___localFile___changeTime' |
  'images___localFile___birthTime' |
  'images___localFile___root' |
  'images___localFile___dir' |
  'images___localFile___base' |
  'images___localFile___ext' |
  'images___localFile___name' |
  'images___localFile___relativeDirectory' |
  'images___localFile___dev' |
  'images___localFile___mode' |
  'images___localFile___nlink' |
  'images___localFile___uid' |
  'images___localFile___gid' |
  'images___localFile___rdev' |
  'images___localFile___ino' |
  'images___localFile___atimeMs' |
  'images___localFile___mtimeMs' |
  'images___localFile___ctimeMs' |
  'images___localFile___atime' |
  'images___localFile___mtime' |
  'images___localFile___ctime' |
  'images___localFile___birthtime' |
  'images___localFile___birthtimeMs' |
  'images___localFile___blksize' |
  'images___localFile___blocks' |
  'images___localFile___url' |
  'images___localFile___publicURL' |
  'images___localFile___childImageSharp___id' |
  'images___localFile___childImageSharp___children' |
  'images___localFile___id' |
  'images___localFile___parent___id' |
  'images___localFile___parent___children' |
  'images___localFile___children' |
  'images___localFile___children___id' |
  'images___localFile___children___children' |
  'images___localFile___internal___content' |
  'images___localFile___internal___contentDigest' |
  'images___localFile___internal___description' |
  'images___localFile___internal___fieldOwners' |
  'images___localFile___internal___ignoreType' |
  'images___localFile___internal___mediaType' |
  'images___localFile___internal___owner' |
  'images___localFile___internal___type' |
  'onlineStoreUrl' |
  'priceRange___minVariantPrice___amount' |
  'priceRange___minVariantPrice___currencyCode' |
  'priceRange___maxVariantPrice___amount' |
  'priceRange___maxVariantPrice___currencyCode' |
  'productType' |
  'publishedAt' |
  'tags' |
  'title' |
  'updatedAt' |
  'vendor' |
  'shopifyId' |
  'variants' |
  'variants___id' |
  'variants___parent___id' |
  'variants___parent___parent___id' |
  'variants___parent___parent___children' |
  'variants___parent___children' |
  'variants___parent___children___id' |
  'variants___parent___children___children' |
  'variants___parent___internal___content' |
  'variants___parent___internal___contentDigest' |
  'variants___parent___internal___description' |
  'variants___parent___internal___fieldOwners' |
  'variants___parent___internal___ignoreType' |
  'variants___parent___internal___mediaType' |
  'variants___parent___internal___owner' |
  'variants___parent___internal___type' |
  'variants___children' |
  'variants___children___id' |
  'variants___children___parent___id' |
  'variants___children___parent___children' |
  'variants___children___children' |
  'variants___children___children___id' |
  'variants___children___children___children' |
  'variants___children___internal___content' |
  'variants___children___internal___contentDigest' |
  'variants___children___internal___description' |
  'variants___children___internal___fieldOwners' |
  'variants___children___internal___ignoreType' |
  'variants___children___internal___mediaType' |
  'variants___children___internal___owner' |
  'variants___children___internal___type' |
  'variants___internal___content' |
  'variants___internal___contentDigest' |
  'variants___internal___description' |
  'variants___internal___fieldOwners' |
  'variants___internal___ignoreType' |
  'variants___internal___mediaType' |
  'variants___internal___owner' |
  'variants___internal___type' |
  'variants___availableForSale' |
  'variants___image___id' |
  'variants___image___originalSrc' |
  'variants___image___localFile___sourceInstanceName' |
  'variants___image___localFile___absolutePath' |
  'variants___image___localFile___relativePath' |
  'variants___image___localFile___extension' |
  'variants___image___localFile___size' |
  'variants___image___localFile___prettySize' |
  'variants___image___localFile___modifiedTime' |
  'variants___image___localFile___accessTime' |
  'variants___image___localFile___changeTime' |
  'variants___image___localFile___birthTime' |
  'variants___image___localFile___root' |
  'variants___image___localFile___dir' |
  'variants___image___localFile___base' |
  'variants___image___localFile___ext' |
  'variants___image___localFile___name' |
  'variants___image___localFile___relativeDirectory' |
  'variants___image___localFile___dev' |
  'variants___image___localFile___mode' |
  'variants___image___localFile___nlink' |
  'variants___image___localFile___uid' |
  'variants___image___localFile___gid' |
  'variants___image___localFile___rdev' |
  'variants___image___localFile___ino' |
  'variants___image___localFile___atimeMs' |
  'variants___image___localFile___mtimeMs' |
  'variants___image___localFile___ctimeMs' |
  'variants___image___localFile___atime' |
  'variants___image___localFile___mtime' |
  'variants___image___localFile___ctime' |
  'variants___image___localFile___birthtime' |
  'variants___image___localFile___birthtimeMs' |
  'variants___image___localFile___blksize' |
  'variants___image___localFile___blocks' |
  'variants___image___localFile___url' |
  'variants___image___localFile___publicURL' |
  'variants___image___localFile___id' |
  'variants___image___localFile___children' |
  'variants___price' |
  'variants___priceV2___amount' |
  'variants___priceV2___currencyCode' |
  'variants___requiresShipping' |
  'variants___selectedOptions' |
  'variants___selectedOptions___name' |
  'variants___selectedOptions___value' |
  'variants___sku' |
  'variants___title' |
  'variants___weight' |
  'variants___weightUnit' |
  'variants___presentmentPrices___edges' |
  'variants___shopifyId' |
  'metafields' |
  'metafields___id' |
  'metafields___parent___id' |
  'metafields___parent___parent___id' |
  'metafields___parent___parent___children' |
  'metafields___parent___children' |
  'metafields___parent___children___id' |
  'metafields___parent___children___children' |
  'metafields___parent___internal___content' |
  'metafields___parent___internal___contentDigest' |
  'metafields___parent___internal___description' |
  'metafields___parent___internal___fieldOwners' |
  'metafields___parent___internal___ignoreType' |
  'metafields___parent___internal___mediaType' |
  'metafields___parent___internal___owner' |
  'metafields___parent___internal___type' |
  'metafields___children' |
  'metafields___children___id' |
  'metafields___children___parent___id' |
  'metafields___children___parent___children' |
  'metafields___children___children' |
  'metafields___children___children___id' |
  'metafields___children___children___children' |
  'metafields___children___internal___content' |
  'metafields___children___internal___contentDigest' |
  'metafields___children___internal___description' |
  'metafields___children___internal___fieldOwners' |
  'metafields___children___internal___ignoreType' |
  'metafields___children___internal___mediaType' |
  'metafields___children___internal___owner' |
  'metafields___children___internal___type' |
  'metafields___internal___content' |
  'metafields___internal___contentDigest' |
  'metafields___internal___description' |
  'metafields___internal___fieldOwners' |
  'metafields___internal___ignoreType' |
  'metafields___internal___mediaType' |
  'metafields___internal___owner' |
  'metafields___internal___type' |
  'metafields___key' |
  'metafields___namespace' |
  'metafields___value' |
  'metafields___valueType' |
  'metafields___shopifyId' |
  'options' |
  'options___id' |
  'options___parent___id' |
  'options___parent___parent___id' |
  'options___parent___parent___children' |
  'options___parent___children' |
  'options___parent___children___id' |
  'options___parent___children___children' |
  'options___parent___internal___content' |
  'options___parent___internal___contentDigest' |
  'options___parent___internal___description' |
  'options___parent___internal___fieldOwners' |
  'options___parent___internal___ignoreType' |
  'options___parent___internal___mediaType' |
  'options___parent___internal___owner' |
  'options___parent___internal___type' |
  'options___children' |
  'options___children___id' |
  'options___children___parent___id' |
  'options___children___parent___children' |
  'options___children___children' |
  'options___children___children___id' |
  'options___children___children___children' |
  'options___children___internal___content' |
  'options___children___internal___contentDigest' |
  'options___children___internal___description' |
  'options___children___internal___fieldOwners' |
  'options___children___internal___ignoreType' |
  'options___children___internal___mediaType' |
  'options___children___internal___owner' |
  'options___children___internal___type' |
  'options___internal___content' |
  'options___internal___contentDigest' |
  'options___internal___description' |
  'options___internal___fieldOwners' |
  'options___internal___ignoreType' |
  'options___internal___mediaType' |
  'options___internal___owner' |
  'options___internal___type' |
  'options___name' |
  'options___values' |
  'options___shopifyId';

export type ShopifyProductFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  availableForSale?: Maybe<BooleanQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  descriptionHtml?: Maybe<StringQueryOperatorInput>;
  handle?: Maybe<StringQueryOperatorInput>;
  images?: Maybe<ShopifyProductImagesFilterListInput>;
  onlineStoreUrl?: Maybe<StringQueryOperatorInput>;
  priceRange?: Maybe<ShopifyProductPriceRangeFilterInput>;
  productType?: Maybe<StringQueryOperatorInput>;
  publishedAt?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  vendor?: Maybe<StringQueryOperatorInput>;
  shopifyId?: Maybe<StringQueryOperatorInput>;
  variants?: Maybe<ShopifyProductVariantFilterListInput>;
  metafields?: Maybe<ShopifyProductMetafieldFilterListInput>;
  options?: Maybe<ShopifyProductOptionFilterListInput>;
};

export type ShopifyProductFilterListInput = {
  elemMatch?: Maybe<ShopifyProductFilterInput>;
};

export type ShopifyProductGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyProductEdge>;
  nodes: Array<ShopifyProduct>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ShopifyProductImages = {
  id?: Maybe<Scalars['String']>;
  originalSrc?: Maybe<Scalars['String']>;
  localFile?: Maybe<File>;
};

export type ShopifyProductImagesFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  originalSrc?: Maybe<StringQueryOperatorInput>;
  localFile?: Maybe<FileFilterInput>;
};

export type ShopifyProductImagesFilterListInput = {
  elemMatch?: Maybe<ShopifyProductImagesFilterInput>;
};

export type ShopifyProductMetafield = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  key?: Maybe<Scalars['String']>;
  namespace?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  valueType?: Maybe<Scalars['String']>;
  shopifyId?: Maybe<Scalars['String']>;
};

export type ShopifyProductMetafieldConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyProductMetafieldEdge>;
  nodes: Array<ShopifyProductMetafield>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ShopifyProductMetafieldGroupConnection>;
};


export type ShopifyProductMetafieldConnectionDistinctArgs = {
  field: ShopifyProductMetafieldFieldsEnum;
};


export type ShopifyProductMetafieldConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ShopifyProductMetafieldFieldsEnum;
};

export type ShopifyProductMetafieldEdge = {
  next?: Maybe<ShopifyProductMetafield>;
  node: ShopifyProductMetafield;
  previous?: Maybe<ShopifyProductMetafield>;
};

export type ShopifyProductMetafieldFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'key' |
  'namespace' |
  'value' |
  'valueType' |
  'shopifyId';

export type ShopifyProductMetafieldFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  key?: Maybe<StringQueryOperatorInput>;
  namespace?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  valueType?: Maybe<StringQueryOperatorInput>;
  shopifyId?: Maybe<StringQueryOperatorInput>;
};

export type ShopifyProductMetafieldFilterListInput = {
  elemMatch?: Maybe<ShopifyProductMetafieldFilterInput>;
};

export type ShopifyProductMetafieldGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyProductMetafieldEdge>;
  nodes: Array<ShopifyProductMetafield>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ShopifyProductMetafieldSortInput = {
  fields?: Maybe<Array<Maybe<ShopifyProductMetafieldFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ShopifyProductOption = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Maybe<Scalars['String']>>>;
  shopifyId?: Maybe<Scalars['String']>;
};

export type ShopifyProductOptionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyProductOptionEdge>;
  nodes: Array<ShopifyProductOption>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ShopifyProductOptionGroupConnection>;
};


export type ShopifyProductOptionConnectionDistinctArgs = {
  field: ShopifyProductOptionFieldsEnum;
};


export type ShopifyProductOptionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ShopifyProductOptionFieldsEnum;
};

export type ShopifyProductOptionEdge = {
  next?: Maybe<ShopifyProductOption>;
  node: ShopifyProductOption;
  previous?: Maybe<ShopifyProductOption>;
};

export type ShopifyProductOptionFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'name' |
  'values' |
  'shopifyId';

export type ShopifyProductOptionFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  values?: Maybe<StringQueryOperatorInput>;
  shopifyId?: Maybe<StringQueryOperatorInput>;
};

export type ShopifyProductOptionFilterListInput = {
  elemMatch?: Maybe<ShopifyProductOptionFilterInput>;
};

export type ShopifyProductOptionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyProductOptionEdge>;
  nodes: Array<ShopifyProductOption>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ShopifyProductOptionSortInput = {
  fields?: Maybe<Array<Maybe<ShopifyProductOptionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ShopifyProductPriceRange = {
  minVariantPrice?: Maybe<ShopifyProductPriceRangeMinVariantPrice>;
  maxVariantPrice?: Maybe<ShopifyProductPriceRangeMaxVariantPrice>;
};

export type ShopifyProductPriceRangeFilterInput = {
  minVariantPrice?: Maybe<ShopifyProductPriceRangeMinVariantPriceFilterInput>;
  maxVariantPrice?: Maybe<ShopifyProductPriceRangeMaxVariantPriceFilterInput>;
};

export type ShopifyProductPriceRangeMaxVariantPrice = {
  amount?: Maybe<Scalars['String']>;
  currencyCode?: Maybe<Scalars['String']>;
};

export type ShopifyProductPriceRangeMaxVariantPriceFilterInput = {
  amount?: Maybe<StringQueryOperatorInput>;
  currencyCode?: Maybe<StringQueryOperatorInput>;
};

export type ShopifyProductPriceRangeMinVariantPrice = {
  amount?: Maybe<Scalars['String']>;
  currencyCode?: Maybe<Scalars['String']>;
};

export type ShopifyProductPriceRangeMinVariantPriceFilterInput = {
  amount?: Maybe<StringQueryOperatorInput>;
  currencyCode?: Maybe<StringQueryOperatorInput>;
};

export type ShopifyProductSortInput = {
  fields?: Maybe<Array<Maybe<ShopifyProductFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ShopifyProductVariant = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  availableForSale?: Maybe<Scalars['Boolean']>;
  image?: Maybe<ShopifyProductVariantImage>;
  price?: Maybe<Scalars['String']>;
  priceV2?: Maybe<ShopifyProductVariantPriceV2>;
  requiresShipping?: Maybe<Scalars['Boolean']>;
  selectedOptions?: Maybe<Array<Maybe<ShopifyProductVariantSelectedOptions>>>;
  sku?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Int']>;
  weightUnit?: Maybe<Scalars['String']>;
  presentmentPrices?: Maybe<ShopifyProductVariantPresentmentPrices>;
  shopifyId?: Maybe<Scalars['String']>;
};

export type ShopifyProductVariantConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyProductVariantEdge>;
  nodes: Array<ShopifyProductVariant>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ShopifyProductVariantGroupConnection>;
};


export type ShopifyProductVariantConnectionDistinctArgs = {
  field: ShopifyProductVariantFieldsEnum;
};


export type ShopifyProductVariantConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ShopifyProductVariantFieldsEnum;
};

export type ShopifyProductVariantEdge = {
  next?: Maybe<ShopifyProductVariant>;
  node: ShopifyProductVariant;
  previous?: Maybe<ShopifyProductVariant>;
};

export type ShopifyProductVariantFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'availableForSale' |
  'image___id' |
  'image___originalSrc' |
  'image___localFile___sourceInstanceName' |
  'image___localFile___absolutePath' |
  'image___localFile___relativePath' |
  'image___localFile___extension' |
  'image___localFile___size' |
  'image___localFile___prettySize' |
  'image___localFile___modifiedTime' |
  'image___localFile___accessTime' |
  'image___localFile___changeTime' |
  'image___localFile___birthTime' |
  'image___localFile___root' |
  'image___localFile___dir' |
  'image___localFile___base' |
  'image___localFile___ext' |
  'image___localFile___name' |
  'image___localFile___relativeDirectory' |
  'image___localFile___dev' |
  'image___localFile___mode' |
  'image___localFile___nlink' |
  'image___localFile___uid' |
  'image___localFile___gid' |
  'image___localFile___rdev' |
  'image___localFile___ino' |
  'image___localFile___atimeMs' |
  'image___localFile___mtimeMs' |
  'image___localFile___ctimeMs' |
  'image___localFile___atime' |
  'image___localFile___mtime' |
  'image___localFile___ctime' |
  'image___localFile___birthtime' |
  'image___localFile___birthtimeMs' |
  'image___localFile___blksize' |
  'image___localFile___blocks' |
  'image___localFile___url' |
  'image___localFile___publicURL' |
  'image___localFile___childImageSharp___id' |
  'image___localFile___childImageSharp___children' |
  'image___localFile___id' |
  'image___localFile___parent___id' |
  'image___localFile___parent___children' |
  'image___localFile___children' |
  'image___localFile___children___id' |
  'image___localFile___children___children' |
  'image___localFile___internal___content' |
  'image___localFile___internal___contentDigest' |
  'image___localFile___internal___description' |
  'image___localFile___internal___fieldOwners' |
  'image___localFile___internal___ignoreType' |
  'image___localFile___internal___mediaType' |
  'image___localFile___internal___owner' |
  'image___localFile___internal___type' |
  'price' |
  'priceV2___amount' |
  'priceV2___currencyCode' |
  'requiresShipping' |
  'selectedOptions' |
  'selectedOptions___name' |
  'selectedOptions___value' |
  'sku' |
  'title' |
  'weight' |
  'weightUnit' |
  'presentmentPrices___edges' |
  'shopifyId';

export type ShopifyProductVariantFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  availableForSale?: Maybe<BooleanQueryOperatorInput>;
  image?: Maybe<ShopifyProductVariantImageFilterInput>;
  price?: Maybe<StringQueryOperatorInput>;
  priceV2?: Maybe<ShopifyProductVariantPriceV2FilterInput>;
  requiresShipping?: Maybe<BooleanQueryOperatorInput>;
  selectedOptions?: Maybe<ShopifyProductVariantSelectedOptionsFilterListInput>;
  sku?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  weight?: Maybe<IntQueryOperatorInput>;
  weightUnit?: Maybe<StringQueryOperatorInput>;
  presentmentPrices?: Maybe<ShopifyProductVariantPresentmentPricesFilterInput>;
  shopifyId?: Maybe<StringQueryOperatorInput>;
};

export type ShopifyProductVariantFilterListInput = {
  elemMatch?: Maybe<ShopifyProductVariantFilterInput>;
};

export type ShopifyProductVariantGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyProductVariantEdge>;
  nodes: Array<ShopifyProductVariant>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ShopifyProductVariantImage = {
  id?: Maybe<Scalars['String']>;
  originalSrc?: Maybe<Scalars['String']>;
  localFile?: Maybe<File>;
};

export type ShopifyProductVariantImageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  originalSrc?: Maybe<StringQueryOperatorInput>;
  localFile?: Maybe<FileFilterInput>;
};

export type ShopifyProductVariantPresentmentPrices = {
  edges?: Maybe<Array<Maybe<ShopifyProductVariantPresentmentPricesEdges>>>;
};

export type ShopifyProductVariantPresentmentPricesEdges = {
  node?: Maybe<ShopifyProductVariantPresentmentPricesEdgesNode>;
};

export type ShopifyProductVariantPresentmentPricesEdgesFilterInput = {
  node?: Maybe<ShopifyProductVariantPresentmentPricesEdgesNodeFilterInput>;
};

export type ShopifyProductVariantPresentmentPricesEdgesFilterListInput = {
  elemMatch?: Maybe<ShopifyProductVariantPresentmentPricesEdgesFilterInput>;
};

export type ShopifyProductVariantPresentmentPricesEdgesNode = {
  price?: Maybe<ShopifyProductVariantPresentmentPricesEdgesNodePrice>;
};

export type ShopifyProductVariantPresentmentPricesEdgesNodeFilterInput = {
  price?: Maybe<ShopifyProductVariantPresentmentPricesEdgesNodePriceFilterInput>;
};

export type ShopifyProductVariantPresentmentPricesEdgesNodePrice = {
  amount?: Maybe<Scalars['String']>;
  currencyCode?: Maybe<Scalars['String']>;
};

export type ShopifyProductVariantPresentmentPricesEdgesNodePriceFilterInput = {
  amount?: Maybe<StringQueryOperatorInput>;
  currencyCode?: Maybe<StringQueryOperatorInput>;
};

export type ShopifyProductVariantPresentmentPricesFilterInput = {
  edges?: Maybe<ShopifyProductVariantPresentmentPricesEdgesFilterListInput>;
};

export type ShopifyProductVariantPriceV2 = {
  amount?: Maybe<Scalars['String']>;
  currencyCode?: Maybe<Scalars['String']>;
};

export type ShopifyProductVariantPriceV2FilterInput = {
  amount?: Maybe<StringQueryOperatorInput>;
  currencyCode?: Maybe<StringQueryOperatorInput>;
};

export type ShopifyProductVariantSelectedOptions = {
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type ShopifyProductVariantSelectedOptionsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type ShopifyProductVariantSelectedOptionsFilterListInput = {
  elemMatch?: Maybe<ShopifyProductVariantSelectedOptionsFilterInput>;
};

export type ShopifyProductVariantSortInput = {
  fields?: Maybe<Array<Maybe<ShopifyProductVariantFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum = 
  'buildTime' |
  'siteMetadata___author' |
  'siteMetadata___description' |
  'siteMetadata___title' |
  'port' |
  'host' |
  'polyfill' |
  'pathPrefix' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  slug?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  handle?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum = 
  'path' |
  'component' |
  'internalComponentName' |
  'componentChunkName' |
  'matchPath' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'isCreatedByStatefulCreatePages' |
  'context___slug' |
  'context___handle' |
  'pluginCreator___id' |
  'pluginCreator___parent___id' |
  'pluginCreator___parent___parent___id' |
  'pluginCreator___parent___parent___children' |
  'pluginCreator___parent___children' |
  'pluginCreator___parent___children___id' |
  'pluginCreator___parent___children___children' |
  'pluginCreator___parent___internal___content' |
  'pluginCreator___parent___internal___contentDigest' |
  'pluginCreator___parent___internal___description' |
  'pluginCreator___parent___internal___fieldOwners' |
  'pluginCreator___parent___internal___ignoreType' |
  'pluginCreator___parent___internal___mediaType' |
  'pluginCreator___parent___internal___owner' |
  'pluginCreator___parent___internal___type' |
  'pluginCreator___children' |
  'pluginCreator___children___id' |
  'pluginCreator___children___parent___id' |
  'pluginCreator___children___parent___children' |
  'pluginCreator___children___children' |
  'pluginCreator___children___children___id' |
  'pluginCreator___children___children___children' |
  'pluginCreator___children___internal___content' |
  'pluginCreator___children___internal___contentDigest' |
  'pluginCreator___children___internal___description' |
  'pluginCreator___children___internal___fieldOwners' |
  'pluginCreator___children___internal___ignoreType' |
  'pluginCreator___children___internal___mediaType' |
  'pluginCreator___children___internal___owner' |
  'pluginCreator___children___internal___type' |
  'pluginCreator___internal___content' |
  'pluginCreator___internal___contentDigest' |
  'pluginCreator___internal___description' |
  'pluginCreator___internal___fieldOwners' |
  'pluginCreator___internal___ignoreType' |
  'pluginCreator___internal___mediaType' |
  'pluginCreator___internal___owner' |
  'pluginCreator___internal___type' |
  'pluginCreator___resolve' |
  'pluginCreator___name' |
  'pluginCreator___version' |
  'pluginCreator___pluginOptions___pixelId' |
  'pluginCreator___pluginOptions___icons___android' |
  'pluginCreator___pluginOptions___icons___appleIcon' |
  'pluginCreator___pluginOptions___icons___appleStartup' |
  'pluginCreator___pluginOptions___icons___coast' |
  'pluginCreator___pluginOptions___icons___favicons' |
  'pluginCreator___pluginOptions___icons___firefox' |
  'pluginCreator___pluginOptions___icons___windows' |
  'pluginCreator___pluginOptions___icons___yandex' |
  'pluginCreator___pluginOptions___logo' |
  'pluginCreator___pluginOptions___trackingId' |
  'pluginCreator___pluginOptions___id' |
  'pluginCreator___pluginOptions___sv' |
  'pluginCreator___pluginOptions___endpoint' |
  'pluginCreator___pluginOptions___background_color' |
  'pluginCreator___pluginOptions___display' |
  'pluginCreator___pluginOptions___name' |
  'pluginCreator___pluginOptions___short_name' |
  'pluginCreator___pluginOptions___start_url' |
  'pluginCreator___pluginOptions___theme_color' |
  'pluginCreator___pluginOptions___dsn' |
  'pluginCreator___pluginOptions___enabled' |
  'pluginCreator___pluginOptions___environment' |
  'pluginCreator___pluginOptions___fonts___google' |
  'pluginCreator___pluginOptions___accessToken' |
  'pluginCreator___pluginOptions___downloadLocal' |
  'pluginCreator___pluginOptions___host' |
  'pluginCreator___pluginOptions___spaceId' |
  'pluginCreator___pluginOptions___path' |
  'pluginCreator___pluginOptions___apiVersion' |
  'pluginCreator___pluginOptions___shopName' |
  'pluginCreator___pluginOptions___pathCheck' |
  'pluginCreator___nodeAPIs' |
  'pluginCreator___browserAPIs' |
  'pluginCreator___ssrAPIs' |
  'pluginCreator___pluginFilepath' |
  'pluginCreator___packageJson___name' |
  'pluginCreator___packageJson___description' |
  'pluginCreator___packageJson___version' |
  'pluginCreator___packageJson___main' |
  'pluginCreator___packageJson___license' |
  'pluginCreator___packageJson___dependencies' |
  'pluginCreator___packageJson___dependencies___name' |
  'pluginCreator___packageJson___dependencies___version' |
  'pluginCreator___packageJson___devDependencies' |
  'pluginCreator___packageJson___devDependencies___name' |
  'pluginCreator___packageJson___devDependencies___version' |
  'pluginCreator___packageJson___peerDependencies' |
  'pluginCreator___packageJson___peerDependencies___name' |
  'pluginCreator___packageJson___peerDependencies___version' |
  'pluginCreator___packageJson___keywords' |
  'pluginCreatorId' |
  'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'resolve' |
  'name' |
  'version' |
  'pluginOptions___pixelId' |
  'pluginOptions___icons___android' |
  'pluginOptions___icons___appleIcon' |
  'pluginOptions___icons___appleStartup' |
  'pluginOptions___icons___coast' |
  'pluginOptions___icons___favicons' |
  'pluginOptions___icons___firefox' |
  'pluginOptions___icons___windows' |
  'pluginOptions___icons___yandex' |
  'pluginOptions___logo' |
  'pluginOptions___trackingId' |
  'pluginOptions___id' |
  'pluginOptions___sv' |
  'pluginOptions___endpoint' |
  'pluginOptions___background_color' |
  'pluginOptions___display' |
  'pluginOptions___name' |
  'pluginOptions___short_name' |
  'pluginOptions___start_url' |
  'pluginOptions___theme_color' |
  'pluginOptions___dsn' |
  'pluginOptions___enabled' |
  'pluginOptions___environment' |
  'pluginOptions___fonts___google' |
  'pluginOptions___fonts___google___family' |
  'pluginOptions___accessToken' |
  'pluginOptions___downloadLocal' |
  'pluginOptions___host' |
  'pluginOptions___spaceId' |
  'pluginOptions___path' |
  'pluginOptions___apiVersion' |
  'pluginOptions___shopName' |
  'pluginOptions___pathCheck' |
  'nodeAPIs' |
  'browserAPIs' |
  'ssrAPIs' |
  'pluginFilepath' |
  'packageJson___name' |
  'packageJson___description' |
  'packageJson___version' |
  'packageJson___main' |
  'packageJson___license' |
  'packageJson___dependencies' |
  'packageJson___dependencies___name' |
  'packageJson___dependencies___version' |
  'packageJson___devDependencies' |
  'packageJson___devDependencies___name' |
  'packageJson___devDependencies___version' |
  'packageJson___peerDependencies' |
  'packageJson___peerDependencies___name' |
  'packageJson___peerDependencies___version' |
  'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  pixelId?: Maybe<Scalars['String']>;
  icons?: Maybe<SitePluginPluginOptionsIcons>;
  logo?: Maybe<Scalars['String']>;
  trackingId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  sv?: Maybe<Scalars['String']>;
  endpoint?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  dsn?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  environment?: Maybe<Scalars['String']>;
  fonts?: Maybe<SitePluginPluginOptionsFonts>;
  accessToken?: Maybe<Scalars['String']>;
  downloadLocal?: Maybe<Scalars['Boolean']>;
  host?: Maybe<Scalars['String']>;
  spaceId?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  apiVersion?: Maybe<Scalars['Date']>;
  shopName?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};


export type SitePluginPluginOptionsApiVersionArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsFilterInput = {
  pixelId?: Maybe<StringQueryOperatorInput>;
  icons?: Maybe<SitePluginPluginOptionsIconsFilterInput>;
  logo?: Maybe<StringQueryOperatorInput>;
  trackingId?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  sv?: Maybe<StringQueryOperatorInput>;
  endpoint?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  dsn?: Maybe<StringQueryOperatorInput>;
  enabled?: Maybe<BooleanQueryOperatorInput>;
  environment?: Maybe<StringQueryOperatorInput>;
  fonts?: Maybe<SitePluginPluginOptionsFontsFilterInput>;
  accessToken?: Maybe<StringQueryOperatorInput>;
  downloadLocal?: Maybe<BooleanQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  apiVersion?: Maybe<DateQueryOperatorInput>;
  shopName?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsFonts = {
  google?: Maybe<Array<Maybe<SitePluginPluginOptionsFontsGoogle>>>;
};

export type SitePluginPluginOptionsFontsFilterInput = {
  google?: Maybe<SitePluginPluginOptionsFontsGoogleFilterListInput>;
};

export type SitePluginPluginOptionsFontsGoogle = {
  family?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsFontsGoogleFilterInput = {
  family?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFontsGoogleFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsFontsGoogleFilterInput>;
};

export type SitePluginPluginOptionsIcons = {
  android?: Maybe<Scalars['Boolean']>;
  appleIcon?: Maybe<Scalars['Boolean']>;
  appleStartup?: Maybe<Scalars['Boolean']>;
  coast?: Maybe<Scalars['Boolean']>;
  favicons?: Maybe<Scalars['Boolean']>;
  firefox?: Maybe<Scalars['Boolean']>;
  windows?: Maybe<Scalars['Boolean']>;
  yandex?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsIconsFilterInput = {
  android?: Maybe<BooleanQueryOperatorInput>;
  appleIcon?: Maybe<BooleanQueryOperatorInput>;
  appleStartup?: Maybe<BooleanQueryOperatorInput>;
  coast?: Maybe<BooleanQueryOperatorInput>;
  favicons?: Maybe<BooleanQueryOperatorInput>;
  firefox?: Maybe<BooleanQueryOperatorInput>;
  windows?: Maybe<BooleanQueryOperatorInput>;
  yandex?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  author?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  author?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum = 
  'ASC' |
  'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type Unnamed_1_QueryVariables = {};


export type Unnamed_1_Query = { allShopifyProduct: { edges: Array<{ node: (
        Pick<ShopifyProduct, 'availableForSale' | 'description' | 'handle' | 'shopifyId' | 'title'>
        & { images?: Maybe<Array<Maybe<(
          Pick<ShopifyProductImages, 'originalSrc'>
          & { localFile?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluid_WithWebp_TracedSvgFragment> }> }> }
        )>>>, metafields?: Maybe<Array<Maybe<Pick<ShopifyProductMetafield, 'key' | 'value'>>>>, variants?: Maybe<Array<Maybe<(
          Pick<ShopifyProductVariant, 'shopifyId' | 'title'>
          & { priceV2?: Maybe<Pick<ShopifyProductVariantPriceV2, 'amount' | 'currencyCode'>> }
        )>>> }
      ) }> } };

export type MenuBackgroundImageQueryVariables = {};


export type MenuBackgroundImageQuery = { file?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluid_WithWebp_TracedSvgFragment> }> }> };

export type Unnamed_2_QueryVariables = {};


export type Unnamed_2_Query = { shopifyProduct?: Maybe<{ images?: Maybe<Array<Maybe<Pick<ShopifyProductImages, 'originalSrc'>>>> }>, site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title' | 'description' | 'author'>> }> };

export type WelcomePopupImageQueryVariables = {};


export type WelcomePopupImageQuery = { file?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluid_WithWebp_TracedSvgFragment> }> }> };

export type ProductsPageQueryVariables = {};


export type ProductsPageQuery = { shopifyCollection?: Maybe<{ products?: Maybe<Array<Maybe<(
      Pick<ShopifyProduct, 'availableForSale' | 'description' | 'handle' | 'shopifyId' | 'tags' | 'title' | 'vendor'>
      & { images?: Maybe<Array<Maybe<(
        Pick<ShopifyProductImages, 'originalSrc'>
        & { localFile?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluid_WithWebp_TracedSvgFragment> }> }> }
      )>>>, metafields?: Maybe<Array<Maybe<Pick<ShopifyProductMetafield, 'key' | 'value'>>>>, variants?: Maybe<Array<Maybe<(
        Pick<ShopifyProductVariant, 'shopifyId' | 'title'>
        & { priceV2?: Maybe<Pick<ShopifyProductVariantPriceV2, 'amount' | 'currencyCode'>> }
      )>>> }
    )>>> }>, allShopifyProduct: { edges: Array<{ node: (
        Pick<ShopifyProduct, 'availableForSale' | 'description' | 'handle' | 'shopifyId' | 'tags' | 'title' | 'vendor'>
        & { images?: Maybe<Array<Maybe<(
          Pick<ShopifyProductImages, 'originalSrc'>
          & { localFile?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluid_WithWebp_TracedSvgFragment> }> }> }
        )>>>, metafields?: Maybe<Array<Maybe<Pick<ShopifyProductMetafield, 'key' | 'value'>>>>, variants?: Maybe<Array<Maybe<(
          Pick<ShopifyProductVariant, 'shopifyId' | 'title'>
          & { priceV2?: Maybe<Pick<ShopifyProductVariantPriceV2, 'amount' | 'currencyCode'>> }
        )>>> }
      ) }> } };

export type BydeauPageQueryVariables = {};


export type BydeauPageQuery = { shopifyCollection?: Maybe<{ products?: Maybe<Array<Maybe<(
      Pick<ShopifyProduct, 'availableForSale' | 'description' | 'handle' | 'shopifyId' | 'tags' | 'title' | 'vendor'>
      & { images?: Maybe<Array<Maybe<(
        Pick<ShopifyProductImages, 'originalSrc'>
        & { localFile?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluid_WithWebp_TracedSvgFragment> }> }> }
      )>>>, metafields?: Maybe<Array<Maybe<Pick<ShopifyProductMetafield, 'key' | 'value'>>>>, variants?: Maybe<Array<Maybe<(
        Pick<ShopifyProductVariant, 'shopifyId' | 'title'>
        & { priceV2?: Maybe<Pick<ShopifyProductVariantPriceV2, 'amount' | 'currencyCode'>> }
      )>>> }
    )>>> }> };

export type BlogPostsPageQueryVariables = {};


export type BlogPostsPageQuery = { allContentfulBlogPost: { edges: Array<{ node: (
        Pick<ContentfulBlogPost, 'publishDate' | 'slug' | 'title'>
        & { description?: Maybe<Pick<ContentfulBlogPostDescriptionTextNode, 'description'>>, image?: Maybe<{ localFile?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluidFragment> }> }> }> }
      ) }> } };

export type SetsPageQueryVariables = {};


export type SetsPageQuery = { shopifyCollection?: Maybe<{ products?: Maybe<Array<Maybe<(
      Pick<ShopifyProduct, 'availableForSale' | 'description' | 'handle' | 'shopifyId' | 'tags' | 'title' | 'vendor'>
      & { images?: Maybe<Array<Maybe<(
        Pick<ShopifyProductImages, 'originalSrc'>
        & { localFile?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluid_WithWebp_TracedSvgFragment> }> }> }
      )>>>, metafields?: Maybe<Array<Maybe<Pick<ShopifyProductMetafield, 'key' | 'value'>>>>, variants?: Maybe<Array<Maybe<(
        Pick<ShopifyProductVariant, 'shopifyId' | 'title'>
        & { priceV2?: Maybe<Pick<ShopifyProductVariantPriceV2, 'amount' | 'currencyCode'>> }
      )>>> }
    )>>> }> };

export type BlogPostQueryVariables = {
  slug: Scalars['String'];
};


export type BlogPostQuery = { contentfulBlogPost?: Maybe<(
    Pick<ContentfulBlogPost, 'publishDate' | 'slug' | 'title'>
    & { body?: Maybe<Pick<ContentfulBlogPostBodyTextNode, 'body'>>, description?: Maybe<Pick<ContentfulBlogPostDescriptionTextNode, 'description'>>, image?: Maybe<{ file?: Maybe<Pick<ContentfulAssetFile, 'url'>> }> }
  )> };

export type PageQueryVariables = {
  slug: Scalars['String'];
};


export type PageQuery = { contentfulPage?: Maybe<(
    Pick<ContentfulPage, 'slug' | 'title'>
    & { blocks?: Maybe<Array<Maybe<(
      Pick<ContentfulBlockFeaturedBlogPosts, 'id' | 'title'>
      & { blogPosts?: Maybe<Array<Maybe<(
        Pick<ContentfulBlogPost, 'createdAt' | 'publishDate' | 'slug' | 'title'>
        & { description?: Maybe<Pick<ContentfulBlogPostDescriptionTextNode, 'description'>>, image?: Maybe<{ localFile?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluidFragment> }> }> }> }
      )>>> }
    ) | Pick<ContentfulBlockFeaturedProducts, 'id' | 'products' | 'title'> | (
      Pick<ContentfulBlockForm, 'contentfulfields' | 'extraTitle' | 'sendToMailchimp' | 'sendToNetlifyForms' | 'successTitle' | 'title'>
      & { description?: Maybe<Pick<ContentfulBlockFormDescriptionTextNode, 'description'>>, extraDescription?: Maybe<Pick<ContentfulBlockFormExtraDescriptionTextNode, 'extraDescription'>>, successDescription?: Maybe<Pick<ContentfulBlockFormSuccessDescriptionTextNode, 'successDescription'>> }
    ) | (
      Pick<ContentfulBlockHero, 'id' | 'title'>
      & { picture?: Maybe<{ resize?: Maybe<Pick<ContentfulResize, 'src'>> }>, pictureText?: Maybe<Pick<ContentfulBlockHeroPictureTextTextNode, 'pictureText'>> }
    )>>> }
  )> };

export type ProductQueryVariables = {
  handle: Scalars['String'];
};


export type ProductQuery = { shopifyProduct?: Maybe<(
    Pick<ShopifyProduct, 'availableForSale' | 'description' | 'descriptionHtml' | 'handle' | 'shopifyId' | 'tags' | 'title' | 'vendor'>
    & { images?: Maybe<Array<Maybe<(
      Pick<ShopifyProductImages, 'originalSrc'>
      & { localFile?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluid_WithWebp_TracedSvgFragment>, resize?: Maybe<Pick<ImageSharpResize, 'src'>>, sizes?: Maybe<Pick<ImageSharpSizes, 'presentationWidth' | 'presentationHeight'>> }> }> }
    )>>>, variants?: Maybe<Array<Maybe<(
      Pick<ShopifyProductVariant, 'shopifyId' | 'title'>
      & { priceV2?: Maybe<Pick<ShopifyProductVariantPriceV2, 'amount' | 'currencyCode'>> }
    )>>> }
  )> };

export type GatsbyContentfulFixedFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_TracedSvgFragment = Pick<ContentfulFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_NoBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulFixed_WithWebpFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulFixed_WithWebp_NoBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulFluidFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_TracedSvgFragment = Pick<ContentfulFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_NoBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulFluid_WithWebpFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulFluid_WithWebp_NoBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulResolutionsFragment = Pick<ContentfulResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_TracedSvgFragment = Pick<ContentfulResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_NoBase64Fragment = Pick<ContentfulResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyContentfulResolutions_WithWebpFragment = Pick<ContentfulResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulResolutions_WithWebp_NoBase64Fragment = Pick<ContentfulResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyContentfulSizesFragment = Pick<ContentfulSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_TracedSvgFragment = Pick<ContentfulSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_NoBase64Fragment = Pick<ContentfulSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyContentfulSizes_WithWebpFragment = Pick<ContentfulSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyContentfulSizes_WithWebp_NoBase64Fragment = Pick<ContentfulSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebpFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebpFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
