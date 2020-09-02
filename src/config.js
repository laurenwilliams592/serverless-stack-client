export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51HLET1F57JO9JHW52iZwJHLtromuAlsz13VPhnd0xk10mp18S7PhnD1QpURmhpgpKPVHKuhD1LgZtSPDijzssMvO00dZtSXGtH",
    s3: {
      REGION: "us-west-1",
      BUCKET: "laurens-notes-app-uploads"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://3c1knxd5p0.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-west-2",
      USER_POOL_ID: "us-west-2_oPgbxetkj",
      APP_CLIENT_ID: "2eblbtn6ja8ltg1qi2307o7ik9",
      IDENTITY_POOL_ID: "us-west-2:28a637df-5b6b-4d16-96ce-236bcc0cf549"
    }
  };