import styles from '../users/scss/infoDetail.module.scss';
const InfoDetails = () => {
   let data:any= localStorage.getItem('userData');
   let userData:any=JSON.parse(data)
   console.log('User Data',userData)
    return ( 
        <div className={styles.parent}>
            <div>
              <div className={styles.title}>Personal Information</div>
              <div className={styles.personalDiv}>
                <div className={styles.box}>
                    <div>
                        <div className={styles.subTitle}>FULL NAME</div>
                        <div className={styles.value}>{userData.profile.firstName} {userData.profile.lastName}</div>
                    </div>
                    <div className={styles.secondInfo}>
                        <div className={styles.subTitle}>MARITAL STATUS</div>
                        <div className={styles.value}>Nill</div>
                    </div>    
                </div>

                <div className={styles.box}>
                    <div>
                        <div className={styles.subTitle}>PHONE NUMBER</div>
                        <div className={styles.value}>{userData.profile.phoneNumber}</div>
                    </div>
                    <div className={styles.secondInfo}>
                        <div className={styles.subTitle}>CHILDREN</div>
                        <div className={styles.value}>Nill</div>
                    </div>    
                </div>

                <div className={styles.box}>
                    <div>
                        <div className={styles.subTitle}>EMAIL ADDRESS</div>
                        <div className={styles.value}>Nill</div>
                    </div>
                    <div className={styles.secondInfo}>
                        <div className={styles.subTitle}>TYPE OF RESIDENT</div>
                        <div className={styles.value}>Nill</div>
                    </div>    
                </div>

                <div className={styles.box}>
                    <div>
                        <div className={styles.subTitle}>BVN</div>
                        <div className={styles.value}>{userData.profile.bvn}</div>
                    </div>
                </div>

                <div className={styles.box}>
                    <div>
                        <div className={styles.subTitle}>GENDER</div>
                        <div className={styles.value}>{userData.profile.gender}</div>
                    </div>
                </div>
              </div>
              <div className={styles.line}/>
            </div>


            <div>
              <div className={styles.title}>Education and Employment</div>
              <div className={styles.personalDiv}>
                <div className={styles.box}>
                    <div>
                        <div className={styles.subTitle}>LEVEL OF EDUCATION</div>
                        <div className={styles.value}>{userData.education.level}</div>
                    </div>
                    <div className={styles.secondInfo}>
                        <div className={styles.subTitle}>OFFICE EMAIL</div>
                        <div className={styles.value}>{userData.education.officeEmail}</div>
                    </div>    
                </div>

                <div className={styles.box}>
                    <div>
                        <div className={styles.subTitle}>EMPLOYMENT STATUS</div>
                        <div className={styles.value}>{userData.education.employmentStatus}</div>
                    </div>
                    <div className={styles.secondInfo}>
                        <div className={styles.subTitle}>MONTHLY INCOME</div>
                        <div className={styles.value}>N{userData.education.monthlyIncome[0]}-N{userData.education.monthlyIncome[1]}</div>
                    </div>    
                </div>

                <div className={styles.box}>
                    <div>
                        <div className={styles.subTitle}>SECTOR OF EMPLOYMENT</div>
                        <div className={styles.value}>{userData.education.sector}</div>
                    </div>
                    <div className={styles.secondInfo}>
                        <div className={styles.subTitle}>LOAN REPAYMENT</div>
                        <div className={styles.value}>{userData.education.loanRepayment}</div>
                    </div>    
                </div>

                <div className={styles.box}>
                    <div>
                        <div className={styles.subTitle}>DURATION OF EMPLOYMENT</div>
                        <div className={styles.value}>{userData.education.duration}</div>
                    </div>
                </div>

              </div>
              <div className={styles.line}/>
            </div>


            <div>
              <div className={styles.title}>Socials</div>
              <div className={styles.personalDiv}>
                <div className={styles.box}>
                    <div>
                        <div className={styles.subTitle}>TWITTER</div>
                        <div className={styles.value}>{userData.socials.twitter}</div>
                    </div>  
                </div>

                <div className={styles.box}>
                    <div>
                        <div className={styles.subTitle}>FACEBOOK</div>
                        <div className={styles.value}>{userData.socials.facebook}</div>
                    </div>
                </div>

                <div className={styles.box}>
                    <div>
                        <div className={styles.subTitle}>INSTAGRAM</div>
                        <div className={styles.value}>{userData.socials.instagram}</div>
                    </div>   
                </div>

    

              </div>
              <div className={styles.line}/>
            </div>

            <div>
              <div className={styles.title}>Guarantor</div>
              <div className={styles.personalDiv}>
                <div className={styles.box}>
                    <div>
                        <div className={styles.subTitle}>FULL NAME</div>
                        <div className={styles.value}>{userData.guarantor.firstName} {userData.guarantor.lastName}</div>
                    </div>  
                </div>

                <div className={styles.box}>
                    <div>
                        <div className={styles.subTitle}>PHONR NUMBER</div>
                        <div className={styles.value}>{userData.guarantor.phoneNumber}</div>
                    </div>
                </div>

                <div className={styles.box}>
                    <div>
                        <div className={styles.subTitle}>EMAIL ADDRESS</div>
                        <div className={styles.value}>nill</div>
                    </div>   
                </div>

                <div className={styles.box}>
                    <div>
                        <div className={styles.subTitle}>RELATIONSHIP</div>
                        <div className={styles.value}>Sister</div>
                    </div>   
                </div>
              </div>
              <div className={styles.line}/>
            </div>


            <div>
              <div className={styles.title}></div>
              <div className={styles.personalDiv}>
                <div className={styles.box}>
                    <div>
                        <div className={styles.subTitle}>FULL NAME</div>
                        <div className={styles.value}>Debby Ogana</div>
                    </div>  
                </div>

                <div className={styles.box}>
                    <div>
                        <div className={styles.subTitle}>PHONR NUMBER</div>
                        <div className={styles.value}>09037363763</div>
                    </div>
                </div>

                <div className={styles.box}>
                    <div>
                        <div className={styles.subTitle}>EMAIL ADDRESS</div>
                        <div className={styles.value}>@grace_effiom</div>
                    </div>   
                </div>

                <div className={styles.box}>
                    <div>
                        <div className={styles.subTitle}>RELATIONSHIP</div>
                        <div className={styles.value}>Sister</div>
                    </div>   
                </div>
              </div>
              <div className={styles.line}/>
            </div>
            
          
        </div>
     );
}
 
export default InfoDetails;