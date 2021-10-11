import { TResult, TResultSuccess, ValidateQuery } from '@common';
import { ResultError, ResultSuccess } from '@utils/api-utils';
import { nanoid } from 'nanoid'
import { withApiHandler } from '@lib/api/withApiHandler';
import { NextApiHandler } from 'next';
import { ApprovalService} from '@modules/approve-course-reviews/service/approval-service'

type PatchData = {
    reviewId: string;
 }
export type reviewId_PatchData = TResultSuccess<PatchData>

const patch: NextApiHandler <TResult<PatchData>> = async (req, res) => { 
    const body= validateBody(req.body);
    if(body.type === 'error') return res.status(400).json(body);

    const reviewError =ApprovalService.approveReviewByID(body.data.reviewId)
    if (reviewError){
         return res.status(500).json(ResultError(`${reviewError}`))
     }
    const approveSuccess = {
        ...body.data,
        _id:  nanoid(16),
        _timestamp: new Date().toISOString(),
    }
    return res.status(200).json(ResultSuccess(approveSuccess))
}

  const validateBody: ValidateQuery<PatchData> = (body) => {
      const castedBody= body as PatchData

      if(typeof castedBody.reviewId !=='string' ||  castedBody.reviewId === ""){
          return ResultError('Missing review_id')
      }
      return ResultSuccess(castedBody);
  }


export default withApiHandler({ patch });
