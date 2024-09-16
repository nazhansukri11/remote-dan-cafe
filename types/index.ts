
export interface Location {
    id: number;
    name: string;
    address: string;
    city: string;
    state: string;
    type: 'cafe' | 'remote_workspace';
    is_remote_friendly: boolean;
    has_wifi: boolean;
    wifi_speed?: number;
    has_power_outlets: boolean;
    has_prayer_room: boolean;
    has_air_conditioning: boolean;
    imageUrl?: string;
  }
  
  export interface LocationFilters {
    type: '' | 'cafe' | 'remote_workspace';
    is_remote_friendly: boolean;
    has_wifi: boolean;
    has_power_outlets: boolean;
    has_prayer_room: boolean;
    has_air_conditioning: boolean;
  }
  