import PropTypes from 'prop-types';

const Job = ({job}) => {
    const{logo,job_title,company_name,job_type,location}=job;
    return (
        <div>
            <h2>{job_title}</h2>
            <img src={logo} alt="" />
            <h2>{company_name}</h2>
            <p>{job_type}</p>
            <p>{location}</p>
        </div>
    );
};

Job.propTypes={
    job:PropTypes.object
}

export default Job;