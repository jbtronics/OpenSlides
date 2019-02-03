import { ChangeRecoMode, LineNumberingMode } from '../../../site/motions/models/view-motion';
import { MergeAmendment } from '../../../shared/models/motions/workflow-state';

/**
 * This interface describes the data returned by the server about an amendment.
 * This object is used if actually the motion is shown and the amendment is shown in the context of the motion.
 */
export interface MotionsMotionSlideDataAmendment {
    id: number;
    title: string;
    amendment_paragraphs: string[];
    merge_amendment_into_final: MergeAmendment;
}

/**
 * This interface describes the data returned by the server about a motion that is changed by an amendment.
 * It only contains the data necessary for rendering the amendment's diff.
 */
export interface MotionsMotionSlideDataBaseMotion {
    identifier: string;
    title: string;
    text: string;
}

/**
 * This interface describes the data returned by the server about a statute paragraph that is changed by an amendment.
 * It only contains the data necessary for rendering the amendment's diff.
 */
export interface MotionsMotionSlideDataBaseStatute {
    title: string;
    text: string;
}

/**
 * This interface describes the data returned by the server about a change recommendation.
 */
export interface MotionsMotionSlideDataChangeReco {
    creation_time: string;
    id: number;
    internal: boolean;
    line_from: number;
    line_to: number;
    motion_id: number;
    other_description: string;
    rejected: false;
    text: string;
    type: number;
}

/**
 * Hint: defined on server-side in the file /openslides/motions/projector.py
 *
 * This interface describes either an motion (with all amendments and change recommendations enbedded)
 * or an amendment (with the bas motion embedded).
 */
export interface MotionsMotionSlideData {
    identifier: string;
    title: string;
    preamble: string;
    text: string;
    reason?: string;
    is_child: boolean;
    show_meta_box: boolean;
    submitter?: string[];
    recommender?: string;
    recommendation?: string;
    recommendation_extension?: string;
    base_motion?: MotionsMotionSlideDataBaseMotion;
    base_statute?: MotionsMotionSlideDataBaseStatute;
    amendment_paragraphs: string[];
    change_recommendations: MotionsMotionSlideDataChangeReco[];
    amendments: MotionsMotionSlideDataAmendment[];
    modified_final_version?: string;
    line_length: number;
    line_numbering_mode: LineNumberingMode;
    change_recommendation_mode: ChangeRecoMode;
}
