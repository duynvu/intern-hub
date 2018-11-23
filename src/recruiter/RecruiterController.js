const { RecruiterService } = require('./RecruiterService');

exports.recruiters_get = async (req, res) => {
  try {
    const listOfRecruiters = await RecruiterService.getListOfRecruiters();
    res.send(listOfRecruiters);
  } catch (err) {
    throw err;
  }
};

exports.recruiterId_get = async (req, res) => {
  try {
    const { recruiterId } = req.params;
    const recruiterObj = { recruiterId };
    const returnObj = await RecruiterService.getRecruiter(recruiterObj);
    res.send(returnObj);
  } catch (err) {
    throw err;
  }
};

exports.recruiterId_info_get = async (req, res) => {
  try {
    const { recruiterId } = req.params;
    const recruiterObj = { recruiterId };
    const returnObj = await RecruiterService.getRecruiterInfo(recruiterObj);
    res.send(returnObj);
  } catch (err) {
    throw err;
  }
};

exports.recruiters_post = async (req, res) => {
  try {
    const { recruiterId, address } = req.body;
    const recruiterObj = { recruiterId, address };
    const returnObj = await RecruiterService.createRecruiterInfo(recruiterObj);
    res.send(returnObj);
  } catch (err) {
    throw err;
  }
};

exports.recruiterId_jobs_get = async (req, res) => {
  try {
    const { recruiterId } = req.params;
    const recruiterObj = { recruiterId };
    const returnObj = await RecruiterService.getRecruiterJob(recruiterObj);
    res.send(returnObj);
  } catch (err) {
    throw err;
  }
};


exports.recruiterId_jobs_post = async (req, res) => {
  try {
    const recruiterId = req.user.userId;
    const {
      jobTitle,
      jobDesc,
      location,
      listOfSkillIds,
      listOfCategoryIds,
    } = req.body;

    const jobObj = {
      recruiterId,
      jobTitle,
      jobDesc,
      location,
      jobSkills: listOfSkillIds,
      jobCategories: listOfCategoryIds,
    };
    const returnObj = await RecruiterService.createRecruiterJob(jobObj);
    res.send(returnObj);
  } catch (err) {
    throw err;
  }
};
