import PropTypes from 'prop-types';
function Student(props) {
    return (
        <div className='student'>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Is a student? {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )
}

// setting the type for the props (so that eslint is happy)
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

export default Student