import { site_name, site_url } from "../../data/names";

const PrivacyContent = () => {
  return (
    <section className="privacy-content">
      <div className="overlay pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="top-wrapper">
                <h3>{site_name} Bank - Terms and Conditions</h3>

Last Updated: August 26, 2024<br/><br/>

Welcome to {site_name} Bank. By accessing or using our website and banking services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.<br/><br/><br/>
<ul>
  <li><h4>1. Introduction </h4>
These Terms and Conditions govern your use of {site_name} Bank’s website and services. By accessing our website, mobile applications, or any other platform provided by {site_name} Bank (collectively referred to as the "Services"), you agree to these terms, which constitute a legally binding agreement between you and {site_name} Bank.
</li>
<li><h4>2. Eligibility</h4>
To use our Services, you must be at least 18 years old and have the legal capacity to enter into this agreement. By using our Services, you represent and warrant that you meet these eligibility requirements.
</li>
<li><h4>3. Account Registration</h4>
To access certain features of our Services, you may be required to register for an account. You agree to provide accurate and complete information during the registration process and to update your information as necessary. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
</li>
<li><h4>4. Privacy Policy</h4>
Your use of our Services is also governed by our Privacy Policy, which can be found at [www.${site_url}/privacy](#). By using our Services, you consent to the collection, use, and sharing of your information as described in our Privacy Policy.
</li>
 <li><h4>5. Banking Services</h4>
{site_name} Bank offers a variety of banking services, including but not limited to savings accounts, checking accounts, loans, and investment options. Specific terms and conditions may apply to each service, and you agree to review and comply with the terms applicable to any service you choose to use.
</li>
<li><h4>6. Fees and Charges</h4>
You agree to pay any fees and charges applicable to the Services you use, as detailed in our Fee Schedule, which can be found at [www.${site_url}/fees](#). Fees are subject to change, and we will notify you of any changes as required by law.
</li>
<li><h4>7. Electronic Communications</h4>
By using our Services, you consent to receive electronic communications from us, including notices, agreements, disclosures, and other information. You agree that these communications satisfy any legal requirements that such communications be in writing.
</li>
 <li><h4>8. Intellectual Property</h4>
All content, trademarks, and data on our website, including but not limited to text, images, software, logos, and design elements, are the property of {site_name} Bank or its licensors. You agree not to reproduce, distribute, or otherwise use any of this content without our prior written consent.
</li>
<li><h4>9. Third-Party Links</h4>
Our website may contain links to third-party websites. These links are provided for your convenience only, and {site_name} Bank is not responsible for the content, products, or services offered by these third parties. Your use of third-party websites is at your own risk.
</li>
<li><h4>10. Limitation of Liability</h4>
To the maximum extent permitted by law, {site_name} Bank shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of our Services, including but not limited to damages for loss of profits, data, or other intangibles.
</li>
<li><h4> 11. Indemnification</h4>
You agree to indemnify, defend, and hold harmless {site_name} Bank, its affiliates, and their respective officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with your use of our Services or your violation of these Terms and Conditions.
</li>
<li><h4>12. Termination </h4>
We reserve the right to terminate or suspend your access to our Services at any time, without notice, for any reason, including if we believe you have violated these Terms and Conditions. Upon termination, your right to use the Services will immediately cease.
</li>
<li><h4>13. Governing Law</h4>
These Terms and Conditions are governed by and construed in accordance with the laws of the State of Georgia. Any legal action or proceeding arising under these Terms and Conditions will be brought exclusively in the courts located in Atlanta, Georgia.
</li>
<li><h4>14. Changes to Terms and Conditions</h4>
We reserve the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting to our website. Your continued use of the Services following the posting of changes constitutes your acceptance of those changes.
</li>
<li><h4>15. Contact Information</h4>
If you have any questions or concerns regarding these Terms and Conditions, please contact us at:
</li>
 </ul>
  <br/><br/>
<div>  
{site_name} Bank <br/>
Customer Service Department <br/>  
Phone: +44-20-7946-0958 <br/>
Email: support@${site_url} <br/>  
Address: 145 West 47th Street, Apt 3B New York, NY 10036 <br/>
  </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyContent;
