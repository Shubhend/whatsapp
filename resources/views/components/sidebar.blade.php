
<div class="app align-content-stretch d-flex flex-wrap">
    <div class="app-sidebar">
        <div class="logo">
            <a href="{{route('homePage')}}" class="logo-icon"><span class="logo-text">Whatsapp Betyphon</span></a>
            <div class="sidebar-user-switcher user-activity-online">
                <a href="/">
                    <!--img src="{{asset('images/avatars/avatar2.png')}}"-->
                    <!--span class="activity-indicator"></span-->
                    <span class="user-info-text">{{ Auth::user()->username}}<br>Credit : {{ Auth::user()->credit}}</span>
                </a>
            </div>
        </div>
        <div class="app-menu">
            <ul class="accordion-menu">
                <li class="sidebar-title">
                    Apps
                </li>
                <li class="{{request()->is('homePage') ? 'active-page' : ''}}">
                    <a href="{{route('homePage')}}" class=""><i class="material-icons-two-tone">dashboard</i>{{__('system.home')}}</a>
                </li>

                <!--
                 <li class="{{request()->is('file-manager') ? 'active-page' : ''}}">
                    <a href="{{route('file-manager')}}" class=""><i class="material-icons-two-tone">folder</i>{{__('File Manager')}}</a>
                </li>
               
                 -->
                <x-select-device></x-select-device>


                @if(Session::has('selectedDevice'))


                <li>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"> <i class="material-icons-two-tone">note</i>Send Message</a>
                <ul class="collapse list-unstyled" id="pageSubmenu">
                    <li>
                    <a href="{{route('messagetest')}}" class="">Send Message</a>

                    </li>
                    <li>
                        <a href="{{route('campaign.lists')}}">Campaign</a>
                    </li>
                  
                </ul>
            </li>

            <li class="{{request()->is('tag') ? 'active-page' : ''}}">
                    <a href="{{route('tag')}}"><i class="material-icons-two-tone">contacts</i>Phone Book</a>
                </li>
             

                <li class="{{request()->is('tag') ? 'active-page' : ''}}">
                    <a href="{{route('tag')}}"><i class="material-icons-two-tone">contacts</i>Template List</a>
                </li>

                <li class="{{request()->is('autoreply') ? 'active-page' : ''}}">
                    <a href="{{route('autoreply')}}" class=""><i class="material-icons-two-tone">message</i>{{__('system.autoreply')}}</a>
                </li>

                <li class="{{request()->is('report') ? 'active-page' : ''}}">
                    <a href="{{route('report')}}" class=""><i class="material-icons-two-tone">note</i>Report</a>
                </li>

              
                
             

                <!--
                <li class="{{request()->is('campaign/create') ? 'active-page' : ''}}">
                    <a href="{{route('campaign.create')}}" class=""><i class="material-icons-two-tone">email</i>Create Campaign</a>
                </li>
                -->

               

              
                @endif
            
                <li>
                    <form action="{{route('logout')}}" method="POST">
                        @csrf
                        <button type="submit" class="dropdown-header h6 " style="border: 0; background-color :white;">Logout</button>
                    </form>
                </li>
               

            </ul>
        </div>
    </div>
    <div class="app-container">
        <div class="search">
            <form>
                <input class="form-control" type="text" placeholder="Type here..." aria-label="Search">
            </form>
            <a href="#" class="toggle-search"><i class="material-icons">close</i></a>
        </div>
        <div class="app-header">
            <nav class="navbar navbar-light navbar-expand-lg">
                <div class="container-fluid">
                    <div class="navbar-nav" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link hide-sidebar-toggle-button" href="#"><i class="material-icons">first_page</i></a>
                            </li>

                          
                        </ul>

                    </div>

                
                    <div class="d">


                    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
    User Profile 
  </button>
  <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
  <li><a class="dropdown-item" href="{{route('changePassword')}}">Change Password</a></li>
                                        <li><a class="dropdown-item" href="{{route('rest-api')}}">Api</a></li>
                                        
                                        <li>
                                <a class="nav-link hide-sidebar-toggle-button" href="{{route('file-manager')}}" class="">{{__('File Manager')}}</a>
                            </li>
                           
                                 
                                        @if(Auth::user()->level == 'admin')
             

                <li>
                    <a class="dropdown-item"  href="{{route('settings')}}">Setting Server</a>
                </li>
                <li class="">
                    <a class="dropdown-item"   href="{{route('admin.manageUser')}}">User Manager</a>
                </li>
                @endif




                                        <li><form action="{{route('logout')}}" method="POST">
                                        @csrf
                                        <button type="submit" class="dropdown-item" >Logout</button></li>
                                        </form>
                                         </li>



  </ul>
</div>

                </div>
            </nav>
        </div>