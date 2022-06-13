import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/profiles`

async function getAllProfiles() {
  const res = await fetch(BASE_URL, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

async function getProfileById(profileId) {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}`,
      {
        headers: {
          'Authorization': `Bearer ${tokenService.getToken()}`
        },
      }
    )
    const data = await res.json()
    return data
  } catch(error) {
    throw error
  }
}

async function editProfile(profileId, updatedProfile) {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}`, 
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${tokenService.getToken()}`
        },
        body: JSON.stringify(updatedProfile)
      }
    )
    const data = await res.json()
    return data
  } catch (error) {
    throw error
  }
}

export {getAllProfiles, getProfileById, editProfile}
