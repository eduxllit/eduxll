import Link from "next/link";
import HeaderLayout from "../components/headerLayout/HeaderLayout";
import Image from "next/image";
import Button from "../components/button/Button";

const AboutUs = () => {
  return (
    <HeaderLayout>
      <div className="bg-[url('/about-us/banner.webp')] bg-cover bg-no-repeat w-full">
        <div className="bg-gradient-to-r from-[#052044] to-transparent">
          <div className="text-white font-semibold lg:h-[300px] sm:h-[220px] h-[160px] grid content-center items-center sm:px-32 px-8">
            <h2 className="sm:text-4xl text-2xl block">Refund Policy</h2>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-1 items-center gap-6 max-w-[1200px] m-auto md:py-20 sm:py-12 py-8 lg:px-0 px-4">
        <div>
        <p className="text-justify">
        We thank you and appreciate your enrolment with us. Please read this
            policy, the terms and conditions of the course offerings and its
            benefits, which are available online and accessible at web
            <a href="www.eduxll.com" className="m-[0 5px]">
              www.eduxll.com
            </a>{" "}
            and the mobile application (the website and the mobile application
            branded and hereinafter referred to as “eduXLL”), and process
            carefully as they will give you important information and guidelines
            about your rights and obligations as our user, concerning any
            purchase you make through us. The policy concerning the processing
            of the refund, shall be following the clauses as set forth:
          </p> <br/>

          <p className="text-justify">
            eduXLL may refund for some transactions/purchases, depending on the
            applicable refund policy for the selected program/course. Any refund
            towards partly or fully paid program/course fee shall be at all
            times SUBJECT TO DEDUCTION OF APPLICABLE COSTS INCLUDING BUT NOT
            LIMITED TO APPLICATION FEES, ADMINISTRATIVE CHARGES, MARKETING &
            PROMOTIONAL CHARGES ETC
          </p>

          <p className="text-justify">
            eduXLL reserves the right to modify and amend the refund policy/ies
            at its sole discretion.{" "}
          </p>
<br/>
          <p className="text-justify">
            You understand that no refund is payable to you, for any reason
            whatsoever, in the event you cancel or raise a ticket/request for a
            refund:
          </p>

          <ul className="ml-[16px]">
          <li><b>-</b> post-closing of the enrolment for the program/course; and/or
            </li>
             <li><b>-</b> on/before 10 (Ten) days of the start of the program/course.
            </li>
          </ul>
<br/>
          <h2 className="text-[20px] font-[600] mb-[0px] capitalize">
            For Executive Education Program 
          </h2>
<br/>
          <p className="text-justify">
            Following are the terms and conditions that govern the
            selection/rejection of the applicants for the program and the Refund
            Policy for all Executive Education programs offered on eduXLL in
            collaboration with its partnering Institute(s) ( <b>“Institute”</b>{" "}
            ). eduXLL and the Institute together reserve the right to cancel the
            programs /courses at any time before the scheduled course launch
            date. In the event eduXLL or the Institute cancels a scheduled
            course before the scheduled course/program launch date, the
            Applicant will receive a full fee refund for the same.
          </p>

          <p className="text-justify">
            When you ( <b>“Applicant”</b> ) apply for a course on eduXLL you
            agree to our Privacy Policy, Terms of Use and the conditions covered
            below.
          </p>

          <ol className="ml-[16px]">
            <li className="mb-[10px]">
              1. The Applicant is expected to read all the program-related
              details (including terms and conditions) and its benefits, which
              are available online on eduXLL.
            </li>

            <li className="mb-[10px]">
              2. In all cases GST will be charged at the prevailing rates over
              and above the fees against each instalment.
            </li>

            <li className="mb-[10px]">
              3. In case the Applicant is selected by the Institute then the
              fees paid shall neither be refundable nor transferable- (i) to any
              other person; (ii) to any other batch; and (iii) to any other
              program/course.
            </li>

            <li className="mb-[10px]">
              4. It is hereby stated that the Applicant may be selected/rejected
              by the selection committee basis the defined eligibility and
              selection criterion of the program, and merely registering with
              eduXLL does not provide any kind of confirmation of
              admission/selection for the program/course to the Applicant.
            </li>

            <li className="mb-[10px]">
              5. The Applicant is expected to share all the required documents
              within the stipulated time during the registration process. Any
              delay in providing the mandatory documents/information while
              applying for the program will lead to disqualification from the
              admission process.
            </li>

            <li className="mb-[10px]">
              6. In case the Applicant’s profile is rejected then the initial
              amount (“Processing Fee”) paid at the time of registration shall
              be refunded subject to a deduction of INR 2,500/- (Indian Rupees
              Two Thousand and Five Hundred only) by way of administrative
              charges.
            </li>

            <li className="mb-[10px]">
              7. eduXLL and/or the Institute may revise the program delivery
              scheduled date and promptly notify the Applicant about the same.
              In the event of non-delivery of course to the Participant by
              eduXLL on the scheduled date or such extended date as decided by
              eduXLL at its discretion, the course fee/program fee would be
              refunded to the payee/Participant, without any interest or
              compensation or damages or cost. Any such refund shall be
              processed to the same account/credit card/ debit card/ finance
              company, from which the amount was received by eduXLL.
            </li>

            <li className="mb-[10px]">
              8. In the following cases the Processing Fee shall not be
              refunded:
              <ul className="ml-[16px]">
                <li className="mb-[10px]">
                  i. if the Applicant rejects the offer issued by the Institute;
                </li>
                <li className="mb-[10px]">
                  ii. if the application is rejected due to submission of
                  incomplete documents and/or providing incomplete information
                  and/or eligibility criteria not fulfilled; and
                </li>
                <li className="mb-[10px]">
                  iii. if the applied loan application of the Applicant is
                  rejected by the Financial Institution (if applicable).
                </li>
              </ul>
            </li>

            <li className="mb-[10px]">
              9. In the event, the Applicant withdraws/drops out from a program
              post-enrolment end date and/or (Ten) 10 days before the start date
              of the program, any course fee including processing charges paid
              by the Applicant will be no-refundable.
            </li>
            <li className="mb-[10px]">
              10. It is to be noted that all refunds are subject to the
              Institute’s discretion and approval. In case of any eligible
              refund, as approved by the Institute, it shall be processed to the
              same account/credit card/ debit card/ finance company, from which
              the amount was received by eduXLL.
            </li>
            <li className="mb-[10px]">
              11. In case of any excess payments or duplicate payments the same
              shall be refunded subject to internal verification and clearance.
            </li>
            <li className="mb-[10px]">
              12. All eligible refunds will be processed within 30 working days
              of receipt of a valid refund request.
            </li>
            <li className="mb-[10px]">
              13. eduXLL and Institute reserve the right to modify and amend the
              refund policy at their sole discretion.
            </li>
          </ol>
<br/>
          <h2 className="text-[20px] font-[600] mb-[16px] capitalize">
            For Early Career Program
          </h2>
          <p className="text-justify">
            For all Early Career programs offered by eduXLL, any payment made,
            towards fee or any charges applicable to the said course/examination
            is non-refundable. Application fee, Test/Assessment fees, Course
            fee, Program fee, etc., wherever applicable, once remitted shall not
            be refunded under any circumstance(s) whatsoever.
          </p>

          <p className="text-justify">
            In the event of non-delivery of course to the Participant by eduXLL
            on the scheduled date or such extended date as decided by eduXLL at
            its discretion, the course fee/program fee would be refunded to the
            payee/Participant, without any interest or compensation or damages
            or cost. Any such refund shall be processed to the same
            account/credit card/ debit card/ finance company, from which the
            amount was received by eduXLL.
          </p>
<br/>
          <h2 className="text-[20px] font-[600] mb-[16px] capitalize">
            CANCELLATION
          </h2>

          <p className="text-justify">
            eduXLL reserves the right to cancel any training program at any time
            for any reason. In such event, eduXLL shall inform the Participant
            of such cancellation and offer the Participant an alternative
            training option or a full refund (if no logins are released) of the
            price paid for the training or, for courses, an alternative Course
            date, at its sole discretion.
          </p>

          <p className="text-justify">
            The Participant is not allowed to cancel orders for any training.
            Once the order for training is received, there are no refunds or
            cancellations. All sales are final.
          </p>
        </div>
      </div>

      
    </HeaderLayout>
  );
};
export default AboutUs;
