import React, { useEffect } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { hideToast } from '../../store/recipeSlice';

const ToastNotification = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.recipes);
    const toast = state?.toast || { show: false, message: '', type: '' };

    useEffect(() => {
        if (toast.show) {
            const timer = setTimeout(() => {
                dispatch(hideToast());
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [toast.show, dispatch]);

    return (
        <ToastContainer position="top-end" className="p-3">
            <Toast show={toast.show} onClose={() => dispatch(hideToast())} bg={toast.type}>
                <Toast.Header>
                    <strong className="me-auto">Notification</strong>
                </Toast.Header>
                <Toast.Body className={toast.type === 'success' ? 'text-white' : ''}>
                    {toast.message}
                </Toast.Body>
            </Toast>
        </ToastContainer>
    );
};

export default ToastNotification;
