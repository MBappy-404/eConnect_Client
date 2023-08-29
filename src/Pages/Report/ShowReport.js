
import {  FaGlobe } from 'react-icons/fa';
import moment from 'moment';

const ShowReport = ({ report }) => {
  const { image, post, _id, postUser, time, postUserPhoto, Reports } = report;
  return (
    <div>
      <div className='px-2'>
        <div className="border md:w-[750px] lg:w-[500px] bg-white mt-4 m-auto rounded-2xl p-2">
          <div className="flex items-center justify-between">
            <div className="gap-2 flex items-center">
              {postUserPhoto ? (
                <>
                  <img src={postUserPhoto} alt='img' className='w-12 h-12 ring-1 rounded-full' />
                </>
              ) : (
                <img src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' alt='img' className='w-12 h-12 ring-1 rounded-full' />
              )}
              <div className="flex leading-3 flex-col">
                <div>
                  <span className="text-sm font-semibold md:text-base">{postUser} </span>
                </div>
                <time className="text-gray-500 text-sm">
                  {moment(`${time}`).fromNow()}
                  <div data-tip="Public" className='inline tooltip'>
                    <FaGlobe  className='inline ml-2' />
                  </div>
                </time>
              </div>
            </div>
            <div>
              <div>
                <label htmlFor={`report-modal-${_id}`} className="btn bg-gray-500 btn-xs m-1">See Reports</label>
                {/* The button to open modal */}
                <input type="checkbox" id={`report-modal-${_id}`} className="modal-toggle" />
                <div id={`modal-${_id}`} className="modal">
                  <div className="modal-box relative">
                    <label htmlFor={`report-modal-${_id}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {/* modal body */}
                    <div className="mx-auto bg-white">
                      <div className="text-center">
                        <h1 className="text-2xl font-bold mb-3">Reports</h1>
                      </div>
                      {Reports.map((report, i) => (
                        // report data
                        <div key={i + 1} className='bg-gray-100 p-3 mt-1 rounded-lg'>
                          <div className="flex items-center mb-2">
                            <div>
                              <h2 className="text-lg font-bold">Posted by: {postUser}</h2>
                              <p className="text-gray-600">Reported by: {report.reporterName}</p>
                            </div>
                          </div>
                          <div className="mb-2">
                            <h3 className="text-lg font-bold">Reason for Report:</h3>
                            <p className="text-gray-700">{report.selectReport}</p>
                          </div>
                        </div>
                      ))}
                      <div className="text-center">
                        <p className="text-red-600 font-bold">This post is under review.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="whitespace-pre-wrap break-all mt-4">{post}</div>
          <div className="mt-5 flex gap-2 justify-center border-b flex-wrap">
            {image ? (
              <>
                <img src={image} className='max-h-96 object-cover w-full' alt="img" />
              </>
            ) : (
              ''
            )}
          </div>
          <div className="h-14 flex items-center gap-1 md:gap-2 px-0 md:px-3 justify-center">
            <p className='text-sm font-semibold text-red-400'>Your post is restricted</p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ShowReport;
