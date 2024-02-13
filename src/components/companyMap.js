import React from 'react'

function companyMap() {
  return (
    <div className="container mt-5 mb-5 text-center">
      <h3 className='mt-5 mb-5 p-3'>
          <i class="fa-solid fa-location-dot"></i> Klifrakplantsoen 178, 3544 RC
          Utrecht. The Netherlands.
      </h3>
      <div >
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2451.6919505847764!2d5.055134976386498!3d52.08533737195042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c66f8ae11841e7%3A0x557060439ddf5d25!2sKlifrakplantsoen%20178%2C%203544%20RC%20Utrecht%2C%20Netherlands!5e0!3m2!1sen!2sin!4v1707847976633!5m2!1sen!2sin" width="100%" height="550" style={{border: '0'}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Company Map"></iframe>
      </div>
    </div>
  )
}

export default companyMap