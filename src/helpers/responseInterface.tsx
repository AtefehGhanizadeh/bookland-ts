interface Response {
    data: Book[];
    result: {
      error_code: string;
      error_message: string;
      errors: string;
    };
  }