import './OpenBizList.css';
import { useSelector, useDispatch } from 'react-redux';
import { getOpenBiz } from '../../../store/openBiz';
import { useState, useEffect } from 'react';
import OpenBizCard from '../OpenBizCard/OpenBizCard';

const OpenBizList = () => {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        dispatch(getOpenBiz()).then(() => setIsLoaded(true))
    }, [dispatch]);

    let bizes = useSelector(state => state.openBizReducer);
    let bizesArr = Object.values(bizes);

    if (bizesArr.length == 0) {
        return "No businesses open at this time."
    }

    return (
        <div className="OpenBizListContainer">
            {isLoaded && (
                <>
                    <div className="OpenBizList">
                        Open Businesses
                        <div className="OpenBizCardContainer">
                            {bizesArr.map((biz) => (
                                <OpenBizCard key={biz.id} biz={biz} />
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default OpenBizList;
