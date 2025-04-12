<style>
    .btn:active {
        background-color: #5a6b53; 
        box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.2);
    }
</style>

<div class="col-12 d-flex justify-content-center mt-3 mb-3">
    <button id="all-btn" class="btn fw-bold me-3 rounded-pill"
        style="font-family: 'Inter', sans-serif; background-color: #697565; color: whitesmoke; cursor: pointer; transition: background-color 0.3s ease; border: none; font-size: 14px; padding: 6px 12px;">
        All
    </button>
    <button id="unread-btn" class="btn fw-bold rounded-pill"
        style="font-family: 'Inter', sans-serif; background-color: #697565; color: whitesmoke; cursor: pointer; transition: background-color 0.3s ease; border: none; font-size: 14px; padding: 6px 12px;">
        Unread
    </button>
</div>
<div class="col-md-8 offset-md-2">
    <ul class="list-unstyled">
        <li class="notification-item mb-3 rounded"
            style="font-family: 'Inter', sans-serif; background-color: #F5EEDC; color: #333; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); font-size: 14px; padding: 10px 15px;">
            <div class="d-flex justify-content-between align-items-center">
                <span><b>New message</b></span>
                <span class="text-muted small">Just now</span>
            </div>
            <p>You have a new message from Wonwoo.</p>
        </li>
        <li class="notification-item mb-3 rounded"
            style="font-family: 'Inter', sans-serif; background-color: #F5EEDC; color: #333; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); font-size: 14px; padding: 10px 15px;">
            <div class="d-flex justify-content-between align-items-center">
                <span><b>Profile update</b></span>
                <span class="text-muted small">1 hour ago</span>
            </div>
            <p>Your profile was successfully updated.</p>
        </li>
    </ul>
</div>