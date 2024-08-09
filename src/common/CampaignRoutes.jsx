import React, { useState } from "react";
import { useSelector } from "react-redux";
import DocumentTemplateCard from "../components/admin/campaigns/documentTemplates/DocumentTemplateCard";
import DocumentViewer from "./documents/DocumentViewer";

const CampaignRoutes = ({ documentTemplateFiles }) => {
    // const { documentTemplateFiles } = useSelector((state) => state.campaigns);
    // console.log("Document Template Files", documentTemplateFiles)
    const [SelectFile, setSelectFile] = useState({});

    return <>
        <div className="w-full h-auto gap-x-2 border-t border-solid px-2 py-1 flex justify-center items-center">
            <div className="w-[45%] flex flex-col justify-start items-start h-[650px]">
                <div className="flex flex-col justify-start w-[95%] gap-y-1 items-start">
                    <h2 className="font-poppins not-italic leading-normal font-semibold text-lg">Templates</h2>
                    <input type="text" placeholder="Search" className="outline-none border py-1 px-2 w-full border-solid" />
                </div>
                <div className="w-full h-full my-2 pr-2 overflow-y-scroll">
                {
                    documentTemplateFiles && (documentTemplateFiles?.map((item, index)=> (<DocumentTemplateCard
                        key={index}
                        value={item}
                        isActive={item?._id === SelectFile?._id}
                        handleSelectedCard={() => {
                            // console.log(item)
                            setSelectFile(item);
                            // handleSelectedTemplate(item);
                        }}
                    />)))
                }
                </div>
            </div>

            <div className="w-[55%] flex justify-start items-start flex-col h-[650px]">
                <div className="w-full flex justify-between px-2 my-3 items-center">
                    <div className="flex justify-center items-center gap-x-2">
                        <h2 className="font-poppins not-italic leading-normal font-semibold text-[#000] text-[14px]">Name:</h2>
                        <h3 className="font-poppins not-italic leading-normal font-light text-[#000000] text-[13px]">{SelectFile?.name}</h3>
                    </div>

                    <div className="flex justify-center items-center gap-x-2">
                        <h2 className="font-poppins not-italic leading-normal font-semibold text-[#000] text-[14px]">Type:</h2>
                        <h3 className="font-poppins not-italic leading-normal font-light text-[#000000] text-[13px] uppercase">{SelectFile?.fileType}</h3>
                    </div>

                    <div className="flex justify-center items-center gap-x-2">
                        <h2 className="font-poppins not-italic leading-normal font-semibold text-[#000] text-[14px]">Category:</h2>
                        <h3 className="font-poppins not-italic leading-normal font-light text-[#000000] text-[13px]">{SelectFile?.category}</h3>
                    </div>
                </div>

                <div className="h-full w-full">
                    <DocumentViewer fileUrl={SelectFile?.path?.split("/")[1]} data={SelectFile} />
                </div>
            </div>
        </div>
    </>
}

export default CampaignRoutes;