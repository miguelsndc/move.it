import { useEffect, useState } from 'react'
import { db } from '../config/firebase'
import { useAuth } from '../contexts/AuthContext'

function useUser() {
  const { user } = useAuth()

  const userRef = db.collection('users').doc(user.uid)

  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)
  const [loading, setLoading] = useState(true)
  const [photoUrl, setPhotoUrl] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    userRef.get().then((doc) => {
      if (doc.exists) {
        const {
          Level,
          CurrentExperience,
          ChallengesCompleted,
          name,
          PhotoUrl,
        } = doc.data()

        setLevel(Level)
        setCurrentExperience(CurrentExperience)
        setChallengesCompleted(ChallengesCompleted)
        setPhotoUrl(PhotoUrl)
        setName(name)

        setLoading(false)
      }
    })
  }, [])

  return {
    userRef,
    level,
    currentExperience,
    challengesCompleted,
    name,
    photoUrl,
    loading,
  }
}

export default useUser
