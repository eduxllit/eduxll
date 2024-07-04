import Image from "next/image";
import Link from "next/link";

interface LinkModelBoxProp {
  modelheading?: string;
  modelcontent?: string;
  buttonsave?: any;
  buttonclose?: any;

  modelclose?: any;

  itemicon?: "sussess" | "update" | "delete";
}

const LinkModelBox = ({
  modelheading,
  modelcontent,
  buttonsave,
  buttonclose,
  modelclose,
  itemicon,
}: LinkModelBoxProp) => {
  return (
    <>
      <div className="modelbox modal bg-[#00000070] backdrop-blur-md !block animate-ModalSlide">
        <div className="relative w-auto pointer-events-none sm:max-w-lg sm:my-0 sm:mx-auto z-[99] flex items-center h-[calc(100%-3.5rem)]">
          <div className="relative flex flex-col w-full pointer-events-auto bg-white dark:bg-dark-card bg-clip-padding rounded">
            <div className="relative flex-auto pt-[30px] p-4 text-slate-600 dark:text-gray-300 leading-relaxed">
              <button
                type="button"
                className="box-content absolute right-[10px] top-[10px] w-4 h-4 p-1 bg-slate-700/60 rounded-full text-slate-300 leading-4 text-xl close"
                aria-label="Close"
                onClick={buttonclose}
              >
                ×
              </button>

              <div className="flex flex-col items-center	 gap-[16px]">
                {itemicon === "sussess" && (
                  <>
                    <div className="icon">
                      <Image
                        src="/checkbox-circle-line.svg"
                        width={50}
                        height={50}
                        alt="icon"
                      />
                    </div>
                  </>
                )}

                {itemicon === "update" && (
                  <>
                    <div className="icon">
                      <Image
                        src="/loop-left-line.svg"
                        width={50}
                        height={50}
                        alt="icon"
                      />
                    </div>
                  </>
                )}

                {itemicon === "delete" && (
                  <>
                    <div className="icon">
                      <Image
                        src="/delete-bin-linered.svg"
                        width={50}
                        height={50}
                        alt="icon"
                      />
                    </div>
                  </>
                )}

                <div className="content">
                  <p className="text-sm text-black">{modelcontent}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap shrink-0 justify-end p-3  rounded-b border-t border-dashed dark:border-gray-700">
              {/* <button
                className="inline-block focus:outline-none text-red-500 hover:bg-red-500 hover:text-white bg-transparent border border-gray-200 dark:bg-transparent dark:text-red-500 dark:hover:text-white dark:border-gray-700 dark:hover:bg-red-500  text-sm font-medium py-2 px-3 rounded me-1 close"
                onClick={buttonclose}
              >
                Close
              </button> */}

              <button
                className="inline-block focus:outline-none text-primary-500 hover:bg-primary-500 hover:text-white bg-transparent border border-gray-200 dark:bg-transparent dark:text-primary-500 dark:hover:text-white dark:border-gray-700 dark:hover:bg-primary-500  text-sm font-medium py-2 px-3 rounded"
                onClick={buttonsave}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinkModelBox;
