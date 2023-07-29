const LOGIN_MUTATION = `
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      result,
      messages {
        message
      },
      successful
    }
  }
`;

export default LOGIN_MUTATION;