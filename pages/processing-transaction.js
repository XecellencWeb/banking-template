import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"


const ProcessingTransaction = () => {

  const [isLoaded,setIsLoaded] = useState(null)
  const search = useSearchParams()

  const navigate = useRouter()

   useEffect(()=>{
    const redirect = setTimeout(()=>{
      setIsLoaded('loaded')
      search.get('withdraw')? navigate.replace('/account?transaction-status=successfull')
      :navigate.replace('/account?transaction-status=bank-error')
    },10000)

    return ()=>clearTimeout(redirect)
   },[])

  return (
    <div id="preloader" className={`preloader ${isLoaded}`}>
        <div className="animation-preloader">
          <div className="spinner"></div>
          <p className="text-center mt-3">Processing</p>
        </div>
        <div className="loader">
          <div className="row">
            <div className="col-3 loader-section section-left">
              <div className="bg"></div>
            </div>
            <div className="col-3 loader-section section-left">
              <div className="bg"></div>
            </div>
            <div className="col-3 loader-section section-right">
              <div className="bg"></div>
            </div>
            <div className="col-3 loader-section section-right">
              <div className="bg"></div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ProcessingTransaction
