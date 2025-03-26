import React, { useState } from 'react';
import './FindDoctorSearchIC.css';
import { useNavigate } from 'react-router-dom';

const initSpeciality = [
  'Dentist', 'Gynecologist/obstetrician', 'General Physician', 'Dermatologist', 'Ear-nose-throat (ent) Specialist', 'Homeopath', 'Ayurveda'
];

const initExperienceLevels = ['1-5 years', '5-10 years', '10+ years'];
const initRatings = [4, 4.5, 5]; // Ratings from 4 to 5 stars
const initGenders = ['Any', 'Male', 'Female'];

const FindDoctorSearchIC = () => {
  const [doctorResultHidden, setDoctorResultHidden] = useState(true);
  const [searchDoctor, setSearchDoctor] = useState('');
  const [selectedSpeciality, setSelectedSpeciality] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [selectedRating, setSelectedRating] = useState('');
  const [selectedGender, setSelectedGender] = useState('Any');
  const [specialities] = useState(initSpeciality);
  const [experienceLevels] = useState(initExperienceLevels);
  const [ratings] = useState(initRatings);
  const [genders] = useState(initGenders);

  const navigate = useNavigate();

  const handleDoctorSelect = (speciality) => {
    setSelectedSpeciality(speciality);
    setDoctorResultHidden(true);
    navigate(`/instant-consultation?speciality=${speciality}&experience=${selectedExperience}&rating=${selectedRating}&gender=${selectedGender}`);
  };

  const handleFilterChange = (filter, value) => {
    switch (filter) {
      case 'speciality':
        setSelectedSpeciality(value);
        break;
      case 'experience':
        setSelectedExperience(value);
        break;
      case 'rating':
        setSelectedRating(value);
        break;
      case 'gender':
        setSelectedGender(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="finddoctor">
      <center>
        <h1>Find a doctor and Consult instantly</h1>
        <div>
          <i style={{ color: '#000000', fontSize: '20rem' }} className="fa fa-user-md"></i>
        </div>
        <div className="home-search-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="doctor-search-box">
            <input
              type="text"
              className="search-doctor-input-box"
              placeholder="Search doctors, clinics, hospitals, etc."
              onFocus={() => setDoctorResultHidden(false)}
              onBlur={() => setDoctorResultHidden(true)}
              value={searchDoctor}
              onChange={(e) => setSearchDoctor(e.target.value)}
            />
            <div className="findiconimg">
              <img className="findIcon" src={process.env.PUBLIC_URL + '/images/search.svg'} alt="" />
            </div>
            <div className="search-doctor-input-results" hidden={doctorResultHidden}>
              {specialities
                .filter((speciality) => speciality.toLowerCase().includes(searchDoctor.toLowerCase()))
                .map((speciality) => (
                  <div
                    className="search-doctor-result-item"
                    key={speciality}
                    onMouseDown={() => handleDoctorSelect(speciality)}
                  >
                    <span>
                      <img
                        src={process.env.PUBLIC_URL + '/images/search.svg'}
                        alt=""
                        style={{ height: '10px', width: '10px' }}
                      />
                    </span>
                    <span>{speciality}</span>
                    <span>SPECIALITY</span>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Filters Section */}
        <div className="filters-container">
          <div className="filter">
            <label htmlFor="experience">Experience:</label>
            <select
              id="experience"
              value={selectedExperience}
              onChange={(e) => handleFilterChange('experience', e.target.value)}
            >
              <option value="">Any</option>
              {experienceLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>
          <div className="filter">
            <label htmlFor="rating">Rating:</label>
            <select
              id="rating"
              value={selectedRating}
              onChange={(e) => handleFilterChange('rating', e.target.value)}
            >
              <option value="">Any</option>
              {ratings.map((rating) => (
                <option key={rating} value={rating}>
                  {rating}+
                </option>
              ))}
            </select>
          </div>
          <div className="filter">
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              value={selectedGender}
              onChange={(e) => handleFilterChange('gender', e.target.value)}
            >
              {genders.map((gender) => (
                <option key={gender} value={gender}>
                  {gender}
                </option>
              ))}
            </select>
          </div>
        </div>
      </center>
    </div>
  );
};

export default FindDoctorSearchIC;
