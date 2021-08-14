//import our graph query parser
import gql from 'graphql-tag';

// our first query will requests all movies
// with only given fields
// note the usage of gql with jsvascript string literal
export const GET_SALESPERSONS = gql`
query
{
  allSalesperson
  {
    edges
    {
      node
      {
        storeSet
        {
          edges
          {
            node
            {
              name
              storeUuid
            }
          }
        }
        business
        {
          businessUuid
          name
          vendor
          {
            
            partner
            
            {
              partnerUuid
              user
              {
                firstName
                lastName
              }
            }
          }
        }
        partner
        {
          partnerUuid
          user
          {
            firstName
            lastName
            
          }
        }
      }
    }
  }
}

`
export const GET_STUDENTS = gql`
query
{
  allStudents
  {
    edges
    {
      node
      {
        partner
        {
          user
          {
            firstName
            lastName
          }
          contactSet
          {
            edges
            {
              node
              {
                phone
              }
            }
          }
          parentSet{
            edges
            {
              node
              {
                partner
                {
                  user
                  {
                    firstName
                    lastName
                  }
                }
              }
            }
          }
          schoolSet
          {
            edges
            {
              node
              {
                name
              }
            }
          }
          walletSet
          {
            edges
            {
              node
              {
                currentBalance
              }
            }
          }
        }
      }
    }
  }
}
`

export const GET_VENDORS = gql`
query
{
  allVendors{
    edges
    {
      node
      {
        partner
        {
          user
          {
            firstName
            lastName
            
          }
          nationalId
          partnerUuid
          walletSet
          {
            edges
            {
              node
              {
                currentBalance
              }
            }
          }
          contactSet
          {
            edges
            {
              node
              {
                phone
              }
            }
          }
        }
      }
    }
  }
}
`
export const GET_STORE_PRODUCTS = gql`
  query($storeUuid: String!) {
    productsByUuid(storeUuid: $storeUuid) {
      productUuid
      name
      sellingPrice
      image
      quantity
      marketPrice
    }
  }
`;
export const GET_PARTNER_BY_UUID = gql`
  query($partnerUuid: String!) {
    partnerByUuid(partnerUuid: $partnerUuid) {
      partnerUuid
      user {
        firstName
        lastName
        username
      }
      walletSet {
        edges {
          node {
            currentBalance
            walletUuid
          }
        }
      }
    }
  }
`;
export const GET_PARTNER_QUERY = gql`
  query($id: String!) {
    partner(id: $id) {
      partnerUuid
      user {
        firstName
        lastName
        username
      }
      contactSet {
        edges {
          node {
            city
          }
        }
      }
      salespersonSet {
        edges {
          node {
            storeSet {
              edges {
                node {
                  name
                  storeUuid
                  business {
                    name
                    vendor {
                      partner {
                        partnerUuid
                      }
                    }
                  }
                  productSet {
                    edges {
                      node {
                        name
                        unitCost
                        sellingPrice
                        productUuid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
export const STORES_LIST_QUERY = gql`
  {
    allStores {
      edges {
        node {
          id
          name
          subcategory
          salesPerson {
            partner {
              user {
                firstName
                lastName
                username
              }
              nationalId
              contactSet {
                edges {
                  node {
                    phone
                    city
                    neighborhood
                    street
                  }
                }
              }
            }
          }
          business {
            name
          }
        }
      }
    }
  }
`;
export const SALESPERSONS_LIST_QUERY = gql`
  {
    allSalesperson {
      edges {
        node {
          partner {
            partnerUuid
            user {
              email
              username
              firstName
              lastName
            }
            partnerRole {
              role
            }
            contactSet {
              edges {
                node {
                  phone
                  city
                  neighborhood
                  street
                }
              }
            }
          }
          business {
            name
          }
        }
      }
    }
  }
`;

export const SCHOOLS_LIST_QUERY = gql`
  {
    allSchools {
      edges {
        node {
          name
          schoolUuid
          category {
            category
          }
        }
      }
    }
  }
`;

export const BUSINESS_TAGS_LIST_QUERY = gql`
  {
    allTags {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;
export const CATEGORY_LIST_QUERY = gql`
  {
    allBusinessCategories {
      edges {
        node {
          id
          category
        }
      }
    }
  }
`;
export const TRANSACTIONS_LIST_QUERY = gql`
  {
    allTransactions {
      edges {
        node {
          To
          From
          date
          amount
        }
      }
    }
  }
`;
export const BUSINESS_LIST_QUERY = gql`
  {
    allBusinesses {
      edges {
        node {
          name
          businessUuid
          vendor {
            partner {
              partnerUuid
            }
          }
        }
      }
    }
  }
`;

export const PARTNERS_LIST_QUERY = gql`
{
    allPartners {
      edges {
        node {
          id
          role
          partnerUuid
          nationalId
          user {
            username
            firstName
            lastName
            email
          }
          contactSet {
            edges {
              node {
                phone
                city
                neighborhood
                street
              }
            }
          }
        }
      }
    }
  }
`;
