//function to call leetcode api
export const getLeetcode = async () => {
    const solvedResponse = await fetch('https://alfa-leetcode-api.onrender.com/moolala/solved');
    const solvedResponseData = await solvedResponse.json();
    const mySet = new Set();

    const submissionResponse = await fetch('https://alfa-leetcode-api.onrender.com/moolala/acSubmission');
    const submissionResponseData = await submissionResponse.json();
    
    
    for (let i = 0; i < submissionResponseData.submission.length; i++) {
        mySet.add(submissionResponseData.submission[i].title);
    }

    const result = {
        solved: solvedResponseData.totalSubmissionNum,
        submission: [...mySet],
        lastSubmissionTime: submissionResponseData.submission[0].timestamp
    }

    return result
}