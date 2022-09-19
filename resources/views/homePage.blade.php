<x-layout-dashboard title="Home">
    <div class="app-content">
        <div class="content-wrapper">
            <div class="container">
               
                @if (session()->has('alert'))
                <x-alert>
                    @slot('type',session('alert')['type'])
                    @slot('msg',session('alert')['msg'])
                </x-alert>
             @endif
             @if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif
                <div class="row">
                    {{-- text danger subscription --}}
                     <h5 class="nav-link text-{{Auth::user()->is_expired_subscription ? 'danger' : 'success'}}  mt-1 hide-sidebar-toggle-button">Subscription : {{Auth::user()->expired_subscription}}</h5>
                               
                 


                     <div class="card card-info card-outline shadow" id="channelStatusCntr_14321">
		<div class="card-header">
			<h5>Status for channel: 14321</h5>
		</div>
		<div class="card-body">
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 p-2">
					<a  href="{{route('home')}}"class="btn btn-lg btn-outline-primary shadow mb-3"  id="fetchChannelStatusBtn_14321">
						<i class="fa fa-sign-in-alt"></i>
						Get Connection Status
                    </a>
					<div id="statusCntrOuter14321" class="d-none">
						<p>Connecting with the system may take upto 5 minutes. Please be patient.</p>
						<div id="statusCntr14321">
							<div class="spinner-border ml-1"></div>
						</div>
					</div>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 p-2 embed-responsive embed-responsive-16by9">
					<video autoplay="autoplay" loop="" controls="" style="width:100%">
						<source src="https://qa.betyphon.website/public/login-a0f99e8cbba9eaa747ec23ffb30d63fe.mp4" type="video/mp4">
					</video>
				</div>
			</div>
		</div>
	</div>
    <div class="row">
                    <div class="col-xl-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex gap-4">

                                    <h5 class="">List Devices </h5><span class="text-warning text-sm">*You have {{$limit_device}} limit devices</span>
                                </div>
                                <button type="button" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#addDevice"><i class="material-icons">add</i>Add </button>
                                <table class="table table-striped">
                                    <thead>
                                        <th>Number</th>
                                        <th>Webhook</th>
                                        <th>Messages Sent</th>
                                        <th>status</th>
                                        <th>Action</th>
                                    </thead>
                                    <tbody>
                                       @foreach ($numbers as $number)
                                       <tr>
    
                                        <td>{{$number['body']}}</td>
                                        <td>
                                            <form action="" method="post">
                                                @csrf
                                                <input type="text" id="webhook" class="form-control form-control-solid-bordered" data-id="{{$number['body']}}" name="" value="{{$number['webhook']}}" id="">
                                            </form>
                                        </td>
                                        <td>{{$number['messages_sent']}}</td>
                                        <td><span class="badge badge-{{ $number['status'] == 'Connected' ? 'success' : 'danger'}}">{{$number['status']}}</span></td>
                                        <td>
                                            <div class="d-flex justify-content-center">

                                                <a href="{{route('scan',$number->body)}}" class="btn btn-warning "  style="font-size: 10px;"><i class="material-icons">qr_code</i></a>
                                                <form action="{{route('deleteDevice')}}" method="POST">
                                                    @method('delete')
                                                    @csrf
                                                    <input name="deviceId" type="hidden" value="{{$number['id']}}">
                                                    <button type="submit" name="delete" class="btn btn-danger "><i class="material-icons">delete_outline</i></button>
                                                </form>
                                            </div>

                                        </td>
                                    </tr>
                                       @endforeach
                                           
                                      
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>


               
                 
                       </div>
                    </div>
                  
                </div>
              
            </div>
        </div>
    </div>
    </div>
    <div class="modal fade" id="addDevice" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add Device</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form action="{{route('addDevice')}}" method="POST">
                        @csrf
                        <label for="sender" class="form-label">Number</label>
                        <input type="number" name="sender" class="form-control" id="nomor"  required>
                        <p class="text-small text-danger">*Use Country Code ( without + )</p>
                        <label for="urlwebhook" class="form-label">Link webhook</label>
                        <input type="text" name="urlwebhook" class="form-control" id="urlwebhook">
                        <p class="text-small text-danger">*Optional</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit"  name="submit" class="btn btn-primary">Save</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <script>
        var typingTimer;                //timer identifier
var doneTypingInterval = 1000;
        $('#webhook').keydown(function(){
            clearTimeout(typingTimer);

            typingTimer = setTimeout(function(){
                $.ajax({
           method : 'POST',
           headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
           url : '{{route('setHook')}}',
           data : {
               number : $('#webhook').data('id'),
               webhook : $('#webhook').val()
           },
           dataType : 'json',
           success : (result) => {
           
           },
           error : (err) => {
                console.log(err);
           }
       })
            }, doneTypingInterval);
        })
    </script>

</x-layout-dashboard>