function validatePass(pass:string) {
    const passLength = pass.length >= 8;
    const includeSpecialCharachter = pass.match(/!|@|\.|#|\$|\*|%|&/);
    const includeNumbers = pass.match(/\d/);
    const includeUpperCase = pass.match(/[A-Z]/);
    const includeLowerCase = pass.match(/[a-z]/);
    return [
      { title: "حداقل 8 کاراکتر", value: passLength },
      { title: "شامل اعداد", value: !!includeNumbers },
      { title: "شامل علائم مانند *, %, @ , ...", value: !!includeSpecialCharachter },
      { title: "شامل حروف بزرگ و کوچک انگلیسی", value: !!includeLowerCase&& !!includeUpperCase },
    ];
}

export default validatePass