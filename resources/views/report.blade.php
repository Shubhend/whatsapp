<x-layout-dashboard title="Contacts">

<style>
    .dt-buttons {
        float:right !important;
    }

    .dataTables_filter{
        float:left !important;
    }

</style>    

    <div class="app-content">
       <link href="{{asset('plugins/select2/css/select2.css')}}" rel="stylesheet">
        <link href="{{asset('https://cdn.datatables.net/buttons/2.2.3/css/buttons.dataTables.min.css')}}" rel="stylesheet">

        <link href="{{asset('https://cdn.datatables.net/autofill/2.4.0/css/autoFill.dataTables.min.css')}}" rel="stylesheet">
        <link href="{{asset('plugins/datatables/datatables.min.css')}}" rel="stylesheet">
     
        
        
    
               
            
                <div class="row">
                    <div class="col">
                        <div class="card">
                            <div class="card-header d-flex justify-content-between">
                                <h5 class="card-title">Report</h5>
                                <!-- <button type="button" class="btn btn-danger " data-bs-toggle="modal" data-bs-target="#selectNomor"><i class="material-icons-outlined">contacts</i>Hapus semua</button>
                                <button type="button" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#selectNomor"><i class="material-icons-outlined">contacts</i>Generate Kontak</button>
                                <div class="d-flex justify-content-right">
                                    <form action="" method="POST">
                                        <button type="submit" name="export" class="btn btn-warning "><i class="material-icons">download</i>Export (xlsx)</button>
                                    </form>
                                    <button type="button" class="btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#importExcel"><i class="material-icons-outlined">upload</i>Import (xlsx)</button>
                                    <button type="button" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#addNumber"><i class="material-icons-outlined">add</i>Tambah</button>
                                </div> -->
                            </div>
                            <div class="card-body">
                                <table id="datatable5" class="display" style="width:100%">
                                    <thead>
                                        <tr>
                                            <th>SendTo</th>
                                            <th>Message</th>
                                            <th>Type</th>
                                            <th>Date</th>
                                            <th class="d-flex justify-content-center">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       @foreach ($report as $tag)
                                           
                                       <tr>
                                           <td>{{$tag->receiver}}</td>
                                           <td>
                                           {{$tag->message}}
                                            </td>
                                            <td>   {{$tag->type}}  </td>
                                            <td>   <?php echo date_format($tag->created_at,'Y-m-d') ?>  </td>
                                            <td>

                                            
                                            <?php if($tag->status){ echo "Sent";  }else { 
                                                
                                                echo "Pending <br/><p style='color:red;'>";
                                              //  echo @unserialize($tag->response)->message;
                                                if(@unserialize($tag->response)->msg=='Make sure your server Node already running!'){
                                                  echo "NODE_SERVER_NOT_RUNNING";
                                                }else if(@unserialize($tag->response)->message=='The destination Number not registered in whatsapp or your sender not connected'){
                                                    echo "CONTACT_NOT_FOUND";
                                                }else{
                                                    echo @unserialize($tag->response)->msg ? @unserialize($tag->response)->msg : @unserialize($tag->response)->message;
                                                }
                                                
                                               echo '</p>'; 
                                               
                                               }  ?>
</td>
                                        </tr>
                                        @endforeach
                                      
    
                                    </tbody>
                                    <tfoot></tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
    
                </div>
    
            </div>
        </div>
    </div>
   

    <script src="{{asset('plugins/datatables/datatables.min.js')}}"></script>
  
    <script src="{{asset('https://cdn.datatables.net/buttons/2.2.3/js/dataTables.buttons.min.js')}}"></script>
    <script src="{{asset('js/pages/select2.js')}}"></script>
    <script src="{{asset('plugins/select2/js/select2.full.min.js')}}"></script>
    <script src="{{asset('https://cdn.datatables.net/buttons/2.2.3/js/buttons.html5.min.js')}}"></script>
   

    <script>

$('#datatable5').DataTable({
    dom: 'Bfrtip',
        buttons: [
        { extend: 'csv', text: 'Download' }
    ]
} );
        </script>
</x-layout-dashboard>