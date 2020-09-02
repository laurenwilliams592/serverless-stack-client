  const dev = {
    STRIPE_KEY: "pk_test_51HLET1F57JO9JHW52iZwJHLtromuAlsz13VPhnd0xk10mp18S7PhnD1QpURmhpgpKPVHKuhD1LgZtSPDijzssMvO00dZ",
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-2-api-dev-attachmentsbucket-1b2fo0zvvqyo0"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://7e4124j6af.execute-api.us-east-1.amazonaws.com/dev"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_f5vCaL6LY",
      APP_CLIENT_ID: "6dglh3k7flius9pgqdfkqmtiba",
      IDENTITY_POOL_ID: "us-east-1:91f25882-c048-4924-952d-e0a2d6be6de0"
    }
  };
  
  const prod = {
    STRIPE_KEY: "pk_test_51HLET1F57JO9JHW52iZwJHLtromuAlsz13VPhnd0xk10mp18S7PhnD1QpURmhpgpKPVHKuhD1LgZtSPDijzssMvO00dZ",
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-2-api-prod-attachmentsbucket-ees1rg73of9h"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://wrw6ddvrmd.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_DqlLMhXet",
      APP_CLIENT_ID: "6ui8kci4u7s2jhshcgglbkuokv",
      IDENTITY_POOL_ID: "us-east-1:4f09a008-428f-4a3a-805a-ec168c428f0e"
    }
  };
  
  // Default to dev if not set
  const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;
  
  export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
  };