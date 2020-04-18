CustomDonations.BuildForm({
    account: '7dbafcc7-ab74-4bcb-820a-e79b196eb7bc',
    form: 'c17a0e99-8f49-4962-a485-ebb5cbccc6d5',
    allocation: null, /* optional. Use an allocation ID, like 'AH664' (w/ quotes) to be default selected on form load */
    memberId: null, /* optional. If the current user is authenticated, you can insert their user ID, like '02943' (with quotes) */
    apiVersion: 'v1',
    interval: null, /* if null, then user must select one time or recurring (if enabled). Optionally can set to 'once', 'monthly','quarterly', or 'yearly' */
    loadingText: 'Loading Secure Form...',
    paymentVersion: 2, /*  1: for modal payment window. 2: for inline payment with Google/Apple Pay options */
    baseUrl: 'https://api.customdonations.com',
    mode: 'live' /* change to 'test' to run in test mode. Use card 4242 4242 4242 4242 for testing. */
  });